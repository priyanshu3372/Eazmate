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
    surface: '#0B0B14', // Premium dark surface background
    alt: '#131322',     // Lighter dark-purple surface background
    textPrimary: '#F4F4F5',   // White primary text
    textSecondary: '#A1A1AA', // Gray secondary text
    textLight: '#71717A',     // Muted gray text
  },
  typography: {
    bodyFont: 'Plus Jakarta Sans, Inter, sans-serif',
    headingFont: 'Plus Jakarta Sans, sans-serif',
    minFontSize: '16px',
    prefFontSize: '18px',
  }
};
