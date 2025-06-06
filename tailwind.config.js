/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '0.5': '0.5px',
      },
      animation: {
        'slide-up': 'slide-up 0.5s ease-out',
      },
      keyframes: {
        'slide-up': {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      }
    },
    colors: {
      transparent: 'transparent',
      'rem': {
        50: '#ecf7ff',
        100: '#d4ebff',
        200: '#b2deff',
        300: '#7ecaff',
        400: '#41abff',
        500: '#1684ff',
        600: '#0060ff',
        700: '#0048fd',
        800: '#0137c0',
        900: '#0837a0',
        950: '#0b2260',
      },
      'rem-gray': {
        50: '#f6f6f7',
        100: '#efeff0',
        200: '#e1e3e4',
        300: '#cfd0d2',
        400: '#babcbf',
        500: '#a7a8ad',
        600: '#919297',
        700: '#7e7e84',
        800: '#67676c',
        900: '#565759',
        950: '#323234',
      },
      'white': '#ffffff',
      'black': '#000000',
      'rem-bg': '#121212',
      'rem-border': '#2A2A2A',
      'yellow': '#eab308'
    },
  },
  plugins: [],
}

