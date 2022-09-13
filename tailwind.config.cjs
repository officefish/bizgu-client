/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'bizgu-white':'#F3F3F3',
      'bizgu-grey':"#C0C0C0",
      'bizgu-black':"#292929",
      'bizgu-red':"#E84A06"
    },
    extend: {
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif'] 
      },
    },
    screens: {
      'mobile': '375px',
      // => @media (min-width: 375px) { ... }

      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1400px',
      // => @media (min-width: 1400px) { ... }
    },
  },
  plugins: [],
}
