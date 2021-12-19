const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    gridTemplateRows: {
      "auto-fit": "repeat(auto-fit, minmax(0, 1fr))",
      "auto-fill": "repeat(auto-fill, minmax(0, 1fr))",
    },
    gridTemplateColumns: {
      "auto-fit": "repeat(auto-fit, minmax(20vw, 1fr))",
      "auto-fill": "repeat(auto-fill, minmax(20vw, 1fr))",
      //  grid-cols-auto-fit grid-cols-auto-fill
    },
    extend: {
      colors: {
        transparent: "transparent",
        beige: "#faf4d3",
        gold: "#D1AC00",
        peach: "#F6BE9A",
        "dark-green": "#004643",
        black: "#0C1618",
      },
      fontFamily: {
        sans: [
          "BrezelGrotesk",
          "Times New Roman",
          ...defaultTheme.fontFamily.sans,
        ],
        serif: ["Tobias", ...defaultTheme.fontFamily.serif],
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
