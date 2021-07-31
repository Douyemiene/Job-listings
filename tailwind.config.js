module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#5ba4a4",
        bgCyan: "#effafa", //bg cyan
        cyan: "#eef6f6", //fiter cyan
        darkCyan: "#7b8e8e", //dark cyan
        darkerCyan: "#2c3a3a", //very dark cyan
      },
      fontFamily: {
        spartan: ["Spartan", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
