/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#FAFAF8',
        mist: '#F1F1EE',
        ink: '#15171C',
        subtle: '#5B5F6B',
        line: '#E5E4E0',
        accent: {
          DEFAULT: '#3B5BDB',
          soft: '#EEF1FD',
          dark: '#2C46AD',
        },
        code: {
          bg: '#0F1115',
          panel: '#181B21',
          border: '#272B33',
          text: '#D8DAE0',
        },
        good: '#1F9D55',
        warn: '#C9860B',
        danger: '#D6493B',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(21, 23, 28, 0.04), 0 1px 1px rgba(21, 23, 28, 0.03)',
      },
    },
  },
  plugins: [],
}
