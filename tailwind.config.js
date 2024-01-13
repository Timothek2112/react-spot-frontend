/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#126da2",
          accent: "#D9D9D9",
        },
        extend: {
          gridTemplateColumns: {
            // Простая сетка из 16 столбцов
            22: "repeat(2, minmax(200px, 1fr))",
          },
        },
      },
    ],
  },
};
