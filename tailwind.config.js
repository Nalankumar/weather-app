/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors:{
      backGround: "#FFF2F2",
      button: "#011627",
      card_bg: "#E5E0FF",
      button_bg:"#7286D3"
    },
    extend: {
      fontFamily:{
        "poppins": ["Poppins", "sans-serif"]
      }
    },
  },
  plugins: [],
}
