/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: 'var(--color-brand-primary, #8A00FF)',
          dark: 'var(--color-brand-dark, #7A2FFF)',
          teal: 'var(--color-brand-teal, #00D4AA)',
          light: 'var(--color-brand-light, #3F7DFF)',
          surface: 'var(--color-brand-surface, #09090b)',
          alt: 'var(--color-brand-alt, #18181b)',
          text: {
            primary: 'var(--color-brand-text-primary, #f4f4f5)',
            secondary: 'var(--color-brand-text-secondary, #a1a1aa)',
            light: 'var(--color-brand-text-light, #71717a)',
          }
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Inter"', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(122, 47, 255, 0.1), 0 2px 6px -1px rgba(122, 47, 255, 0.05)',
        'premium': '0 10px 30px -5px rgba(122, 47, 255, 0.15), 0 4px 12px -2px rgba(0, 212, 170, 0.1)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      }
    },
  },
  plugins: [],
}
