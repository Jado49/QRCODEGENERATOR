// tailwind.config.js

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'qrcody-blue': '#3490dc',
        'qrcody-yellow': '#f59e0b',
      },
      fontFamily: {
        'qrcody': ['Roboto', 'sans-serif'],
      },
      // other customizations as needed
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
