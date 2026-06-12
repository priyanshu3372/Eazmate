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
    primary: '#c4b083', // Luxury gold brand accent
    dark: '#ad8e45',    // Deeper gold brand accent
    teal: '#ccaf69',    // Signature metallic gold accent
    light: '#d4c8ab',   // Platinum/light gold accent
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
