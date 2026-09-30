/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: '#1B1815',
          light: '#2A2521',
          soft: '#3A332C',
        },
        ivory: {
          DEFAULT: '#F7F2E9',
          warm: '#F1E9D8',
        },
        cream: '#FBF8F2',
        champagne: {
          DEFAULT: '#B99356',
          light: '#D4B678',
          dark: '#8F6F3E',
        },
        brown: {
          DEFAULT: '#5A4230',
          deep: '#3E2E20',
        },
        offwhite: '#EFEAE0',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['Manrope', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.22em',
      },
      boxShadow: {
        soft: '0 20px 60px -20px rgba(27,24,21,0.35)',
        card: '0 12px 30px -12px rgba(27,24,21,0.25)',
      },
      maxWidth: {
        prose: '68ch',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
