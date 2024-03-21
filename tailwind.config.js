/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: { maxWidth: {
      container: "1220px",
    },
    fontFamily: {
      dm : ["DM Sans", "sans-serif"],
      poppins : ["Poppins","sans-serif"],
    },
    colors: {
     gray : '#A7A7A7',
    },
    colors: {
      black: '#191919',
    },
    colors: {
      darkgray: '#CCCCCC',
    },
  },
  },
  plugins: [],
}

