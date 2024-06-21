/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "csBlue": "var(--Blue)",
        "CWork": "var(--Light-red-work)", 
        "CPlay" : "var(--Soft-blue-play)",
        "CStudy" : "var(--Light-red-study)",
        "CExercise" : "var(--Lime-green-exercise)",
        "CSocial" : "var(--Violet-social)",
        "CSelfCare" : "var(--orange-self-care)",
        "VioletSocial" : "var(--Violet-social)",
        "VDblue" : "var(--Very-dark-blue)",
        "Darkblue" : "var(--Dark-blue)",
        "DesaturatedBlue" : "var(--Desaturated-blue)",
        "IceBlue" : "var(--Pale-Blue)",
           
      },
    },
  },
  plugins: [],
}