/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        solar: {
          green: '#057A44',
          'green-light': '#10B981',
          'green-dark': '#03542E',
          blue: '#03243C',
          'blue-dark': '#011727',
          'blue-light': '#0A3B5C',
          amber: '#F59E0B',
          bg: '#F8FAFC',
          card: '#FFFFFF'
        }
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'sans-serif'],
      },
      boxShadow: {
        'solar': '0 10px 25px -5px rgba(0, 51, 102, 0.08), 0 8px 10px -6px rgba(46, 125, 50, 0.04)',
        'solar-lg': '0 20px 35px -10px rgba(0, 51, 102, 0.12), 0 10px 15px -5px rgba(46, 125, 50, 0.08)',
        'solar-glow': '0 0 25px rgba(76, 175, 80, 0.3)',
      }
    },
  },
  plugins: [],
}
