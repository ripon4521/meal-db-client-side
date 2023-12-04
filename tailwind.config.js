/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
       ranacho:['Rancho', 'cursive'],
       roboto :[ 'Roboto', 'sans-serif'],
   popins: ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}

