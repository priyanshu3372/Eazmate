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
    surface: '#101010', // Deep black-charcoal background
    alt: '#1a1a1a',     // Luxury card background
    textPrimary: '#ffffff',   // White primary text
    textSecondary: '#a3a3a3', // Muted silver/gray text
    textLight: '#737373',     // Dark muted gray text
  },
  typography: {
    bodyFont: 'Plus Jakarta Sans, Inter, sans-serif',
    headingFont: 'Plus Jakarta Sans, sans-serif',
    minFontSize: '16px',
    prefFontSize: '18px',
  }
};
