/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary-100':'hsl(322, 100%, 66%)',
        'primary-200':'hsl(321, 100%, 78%)',
        'primary-300':'hsl(0, 100%, 63%)',
        'secondary-100':'hsl(192, 100%, 9%)',
        'secondary-200':'hsl(207, 100%, 98%)',
      },
      fontFamily: {
        poppins: ['Poppins','sans-serif'],
      },
    },
  },
  plugins: [],
}

