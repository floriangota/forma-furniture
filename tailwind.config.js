/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#1B1A17',
        stone: {
          50: '#F9F7F3',
          100: '#F2EEE7',
          200: '#E6DFD3',
          300: '#D2C8B8',
          400: '#B3A794',
          500: '#8C8272',
          600: '#6B6255',
          700: '#4E473E',
          800: '#33302A',
        },
        bronze: {
          DEFAULT: '#A47C4B',
          light: '#C9A97C',
          dark: '#7E5D36',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Georgia', 'serif'],
      },
      letterSpacing: {
        widest2: '0.22em',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out both',
      },
    },
  },
  plugins: [],
};
