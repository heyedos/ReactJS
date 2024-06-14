/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "card-back" : "url('../src/assets/images/bg-card-back.png')",
        "card-front" : "url('../src/assets/images/bg-card-front.png')",
        "mainbg" : "url('../src/assets/images/bg-main-desktop.png')",
      },
      colors: {
        "DarkGV": "var(--Dark-grayish-violet)",
        "LightGV": "var(--Light-grayish-violet)", 
        "LinearG" : "var(--Linear-gradient)",
        "Cred" : "var(--Red)",
        "VDarkV" : "var(--Very-dark-violet)",
        "Cwhite" : "var(--White)",
           
      },
    },
  },
  plugins: [],
}

