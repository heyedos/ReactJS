/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "Custom-Purple" : "var(--Purple)",
        "Light-red" :  "var(--Light-red)",
    
        "CWhite" :  "var(--White)",
        "Off-white" : "var(--Off-white)",
        "CLight-grey": "var(--Light-grey)",
        "Smokey-grey": "var(--Smokey-grey)",
        "Off-black" : "var(--Off-black)",
      },
    },
  },
  plugins: [],
}