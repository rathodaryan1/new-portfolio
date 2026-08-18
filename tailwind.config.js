/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        light: {
          bg: '#FAFAF9',
          surface: '#FFFFFF',
          text: '#171717',
          secondary: '#5F5F66',
          muted: '#737373',
          border: '#E5E5E5',
          accent: '#2563EB',
        },
        dark: {
          bg: '#0D0D0D',
          surface: '#171717',
          text: '#F5F5F5',
          secondary: '#A3A3A3',
          muted: '#737373',
          border: '#2A2A2A',
          accent: '#60A5FA',
        },
        optenary: {
          green: '#00C98D',
          teal: '#19E6AA',
          blue: '#6EA8FF',
          purple: '#8B5CF6',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'Geist', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
