/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "soft-orange" : "var(--Soft-orange)",
        "Soft-red" : "var(--Soft-red)",
        "Off-white" : "var(--Off-white)",
        "Grayish-blue" : "var(--Grayish-blue)",
        "Dark-Gblue" : "var(--Dark-grayish-blue)",
        "Dark-blue" : "var(--Very-dark-blue)",
      },
      backgroundImage: {
        "bgImg" : "url('/src/assets/images/image-web-3-desktop.jpg')",
      }
    },
  },
  plugins: [],
}