/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "joel":"#181818",
        "card-color":"#EBE9EA",
        "cor-footer":"#181818"
      },
      backgroundImage:{
        "Joordan":"url('./src/components/heroSection/jo.png')"
      },
    },
  },
  plugins: [],
}