export interface ThemeTokens {
  colors: {
    primary: string;
    dark: string;
    teal: string;
    light: string;
    surface: string;
    alt: string;
    textPrimary: string;
    textSecondary: string;
    textLight: string;
  };
  typography: {
    bodyFont: string;
    headingFont: string;
    minFontSize: string;
    prefFontSize: string;
  };
}

export const themeConfig: ThemeTokens = {
  colors: {
    primary: '#8A00FF', // Purple brand accent
    dark: '#7A2FFF',    // Dark Purple brand accent
    teal: '#24D8C6',    // Signature Teal accent
    light: '#3F7DFF',   // Neon Blue accent
    surface: '#FFFFFF', // Clean white surface
    alt: '#F7FDF9',     // Light-green tinted background
    textPrimary: '#1A1A2E',   // Dark indigo text
    textSecondary: '#6B7280', // Gray text
    textLight: '#9CA3AF',     // Muted gray text
  },
  typography: {
    bodyFont: 'Plus Jakarta Sans, Inter, sans-serif',
    headingFont: 'Plus Jakarta Sans, sans-serif',
    minFontSize: '16px',
    prefFontSize: '18px',
  }
};
