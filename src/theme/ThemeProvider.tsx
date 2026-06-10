import React, { createContext, useContext, useEffect } from 'react';
import { themeConfig, type ThemeTokens } from '../config/theme.config';

interface ThemeContextType {
  theme: ThemeTokens;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    const root = document.documentElement;
    
    // Inject color variables as CSS Custom Properties for Tailwind integration
    root.style.setProperty('--color-brand-primary', themeConfig.colors.primary);
    root.style.setProperty('--color-brand-dark', themeConfig.colors.dark);
    root.style.setProperty('--color-brand-teal', themeConfig.colors.teal);
    root.style.setProperty('--color-brand-light', themeConfig.colors.light);
    root.style.setProperty('--color-brand-surface', themeConfig.colors.surface);
    root.style.setProperty('--color-brand-alt', themeConfig.colors.alt);
    root.style.setProperty('--color-brand-text-primary', themeConfig.colors.textPrimary);
    root.style.setProperty('--color-brand-text-secondary', themeConfig.colors.textSecondary);
    root.style.setProperty('--color-brand-text-light', themeConfig.colors.textLight);
    
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: themeConfig }}>
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
