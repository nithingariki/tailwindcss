module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors : {
        primary : "yellow",
        secondary : {
          100 : "grey",
          200 : "black"
        }
      },
      fontFamily : {
        body :["Nunito"]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
