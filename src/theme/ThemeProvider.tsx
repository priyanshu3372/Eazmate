import React, { createContext, useContext, useEffect, useState } from 'react';
import { themeConfig, type ThemeTokens } from '../config/theme.config';

export type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
  theme: ThemeMode;
  toggleTheme: (event: React.MouseEvent<HTMLButtonElement>) => void;
  themeConfig: ThemeTokens;
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

  const toggleTheme = (event: React.MouseEvent<HTMLButtonElement>) => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    
    // Fallback if browser doesn't support View Transitions or if user prefers reduced motion
    const supportsViewTransition = typeof document.startViewTransition === 'function';
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!supportsViewTransition || prefersReducedMotion) {
      setTheme(nextTheme);
      return;
    }

    const x = event.clientX;
    const y = event.clientY;

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
      setTheme(nextTheme);
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
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, themeConfig }}>
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
