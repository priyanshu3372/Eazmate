import React, { createContext, useContext, useEffect, useState } from 'react';
import { flushSync } from 'react-dom';
import { themeConfig, type ThemeTokens } from '../config/theme.config';

export type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
  theme: ThemeMode;
  toggleTheme: (event?: React.MouseEvent<HTMLElement> | MouseEvent) => void;
  themeConfig: ThemeTokens;
  performanceMode: 'high' | 'normal' | 'low';
  fps: number;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') as ThemeMode | null;
      if (savedTheme === 'light' || savedTheme === 'dark') {
        return savedTheme;
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'dark';
  });

  const [fps, setFps] = useState<number>(60);
  const [transitionDuration, setTransitionDuration] = useState<number>(650);
  const [performanceMode, setPerformanceMode] = useState<'high' | 'normal' | 'low'>('normal');

  useEffect(() => {
    // Detect frame rate and performance capabilities
    if (typeof window === 'undefined' || !window.requestAnimationFrame) return;

    let start = performance.now();
    let frameCount = 0;
    const maxFrames = 15; // Small sample of 15 frames to measure screen refresh rate quickly

    const checkFrame = (now: number) => {
      frameCount++;
      if (frameCount >= maxFrames) {
        const elapsed = now - start;
        const estimatedFps = Math.round((frameCount * 1000) / elapsed);
        
        let dur = 650;
        let mode: 'high' | 'normal' | 'low' = 'normal';

        if (estimatedFps >= 100) {
          // 120Hz or 144Hz high refresh rate screen
          dur = 600;
          mode = 'high';
        } else if (estimatedFps >= 80) {
          // 90Hz screens
          dur = 650;
          mode = 'normal';
        } else if (estimatedFps < 45) {
          // Low performance
          dur = 400;
          mode = 'low';
        } else {
          // Standard 60Hz
          dur = 650;
          mode = 'normal';
        }

        setFps(estimatedFps);
        setTransitionDuration(dur);
        setPerformanceMode(mode);
        
        // Inject dynamic transitions configurations into root instantly
        const doc = document.documentElement;
        doc.style.setProperty('--ripple-duration', `${dur}ms`);
      } else {
        requestAnimationFrame(checkFrame);
      }
    };

    requestAnimationFrame(checkFrame);
  }, []);

  const setTheme = (newTheme: ThemeMode) => {
    setThemeState(newTheme);
    localStorage.setItem('theme', newTheme);
    
    const root = document.documentElement;
    if (newTheme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  };

  const toggleTheme = (event?: React.MouseEvent<HTMLElement> | MouseEvent) => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    
    // Fallback if browser doesn't support View Transitions or prefers-reduced-motion
    const supportsViewTransition = typeof document.startViewTransition === 'function';
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!supportsViewTransition || prefersReducedMotion) {
      setTheme(nextTheme);
      return;
    }

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;

    if (event) {
      const clientX = 'clientX' in event ? event.clientX : 0;
      const clientY = 'clientY' in event ? event.clientY : 0;

      if (clientX !== 0 || clientY !== 0) {
        x = clientX;
        y = clientY;
      } else if (event.currentTarget && event.currentTarget instanceof HTMLElement) {
        const rect = event.currentTarget.getBoundingClientRect();
        x = rect.left + rect.width / 2;
        y = rect.top + rect.height / 2;
      }
    }

    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const doc = document.documentElement;
    doc.style.setProperty('--ripple-x', `${x}px`);
    doc.style.setProperty('--ripple-y', `${y}px`);
    doc.style.setProperty('--ripple-r', `${endRadius}px`);

    doc.classList.add('theme-transitioning');

    const transition = document.startViewTransition(() => {
      flushSync(() => {
        setTheme(nextTheme);
      });
    });

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`
          ]
        },
        {
          duration: transitionDuration || 650,
          easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
          pseudoElement: '::view-transition-new(root)'
        }
      );
    });

    transition.finished.then(() => {
      doc.classList.remove('theme-transitioning');
    });
  };

  useEffect(() => {
    const root = document.documentElement;
    // Inject the theme class
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
    
    // Inject color variables as CSS Custom Properties for Tailwind integration
    root.style.setProperty('--color-brand-primary', themeConfig.colors.primary);
    root.style.setProperty('--color-brand-dark', themeConfig.colors.dark);
    root.style.setProperty('--color-brand-teal', themeConfig.colors.teal);
    root.style.setProperty('--color-brand-light', themeConfig.colors.light);
    
    // Dynamic transition duration mapping
    root.style.setProperty('--ripple-duration', `${transitionDuration}ms`);
  }, [theme, transitionDuration]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, themeConfig, performanceMode, fps }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
