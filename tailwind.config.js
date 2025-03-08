/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          pink: { DEFAULT: '#ef476f', 100: '#390511', 200: '#720a22', 300: '#ac0f34', 400: '#e51445', 500: '#ef476f', 600: '#f26d8c', 700: '#f591a9', 800: '#f9b6c5', 900: '#fcdae2' },
          yellow: { DEFAULT: '#ffd166', 100: '#473200', 200: '#8f6400', 300: '#d69600', 400: '#ffbc1f', 500: '#ffd166', 600: '#ffda85', 700: '#ffe3a3', 800: '#ffedc2', 900: '#fff6e0' },
          blue: { DEFAULT: '#0081a6', 100: '#001a22', 200: '#003543', 300: '#004f65', 400: '#006987', 500: '#0081a6', 600: '#00b9ed', 700: '#32d3ff', 800: '#76e1ff', 900: '#bbf0ff' },
          navy: { DEFAULT: '#0a2342', 100: '#02070d', 200: '#040e1b', 300: '#061528', 400: '#081c35', 500: '#0a2342', 600: '#154c8e', 700: '#2074d9', 800: '#68a2e8', 900: '#b4d0f4' },
          green: { DEFAULT: '#84bc9c', 100: '#17291f', 200: '#2e533e', 300: '#447c5d', 400: '#5ca57c', 500: '#84bc9c', 600: '#9ec9b1', 700: '#b6d7c4', 800: '#cee4d8', 900: '#e7f2eb' }
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
      backgroundImage: {
        'gradient-calm': 'linear-gradient(135deg, rgba(0, 129, 166, 0.1) 0%, rgba(132, 188, 156, 0.1) 100%)',
        'gradient-soft': 'linear-gradient(135deg, rgba(255, 209, 102, 0.1) 0%, rgba(239, 71, 111, 0.1) 100%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};