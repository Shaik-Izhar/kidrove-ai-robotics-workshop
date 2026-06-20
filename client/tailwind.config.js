/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#fff8f0',
          100: '#fff0db',
          200: '#ffddb3',
          300: '#ffc580',
          400: '#faa94d',
          500: '#F8962B', // Kidrove Orange — exact brand color
          600: '#e07d14',
          700: '#bb6210',
          800: '#964e0d',
          900: '#7a3f0b',
          950: '#462105',
        },
        secondary: {
          50:  '#fdf4ff',
          100: '#f9e8ff',
          200: '#f2d0fe',
          300: '#e8aafd',
          400: '#d77df9',
          500: '#7e3899', // Kidrove Purple — exact brand color
          600: '#6c2a85',
          700: '#5a206f',
          800: '#48165a',
          900: '#3b0f4a',
        },
        pink: {
          500: '#f672a3', // Kidrove Accent Pink — exact brand color
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'xl':  '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
        'full': '9999px',
      },
      boxShadow: {
        'card': '0 2px 8px rgba(0,0,0,0.07)',
        'card-hover': '0 8px 24px rgba(0,0,0,0.12)',
        'orange': '0 4px 14px rgba(248,150,43,0.35)',
      },
      animation: {
        'float': 'float 5s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':       { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
}
