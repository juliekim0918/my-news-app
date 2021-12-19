const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
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
