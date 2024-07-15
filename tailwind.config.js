/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Brandon Text, Arial, sans-serif",
      },
      colors: {
        primary: {
          yellow: "#F8AB00",
          navy: "#13243A",
          "yellow-hover": "#e59400",
          "navy-hover": "#2d4d77",
        },
        secondary: {
          100: "#87D0F1",
          200: "#1199D6",
          300: "#005D85",
          "100-hover": "#6aa7d9",
          "200-hover": "#0e73a7",
          "300-hover": "#004366",
        },
        tertiary: {
          pink: {
            100: "#BB5B78",
            200: "#C32D57",
            "100-hover": "#a54866",
            "200-hover": "#b01844",
          },
          green: {
            100: "#118C7F",
            200: "#004E45",
            "100-hover": "#0e776d",
            "200-hover": "#00352e",
          },
          blue: {
            100: "#87D0F1",
            200: "#005D85",
          },
        },
      },
      extend: {
        borderRadius: {
          DEFAULT: "0.6rem",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
