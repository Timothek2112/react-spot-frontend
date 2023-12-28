/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes:[
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#008ED4",
          accent: "#D9D9D9",
        }
      }
    ]
  }
}
