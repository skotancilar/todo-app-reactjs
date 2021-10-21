module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          light: '#D0E6F5',
          DEFAULT: '#00CEFD',
          dark: '#3880D7',
        }
      },
    },
    variants: {
      extend: {
        animation: ['motion-safe'],
      }
    },
  },
  plugins: [],
}
