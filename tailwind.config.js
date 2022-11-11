/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Graphik', 'sans-serif'], // для примера
      serif: ['Merriweather', 'serif'],
    },

    screens: {
      mobile: '576px',
      'small-tablet': '600px',
      tablet: '768px',
      'small-laptop': '992px',
      laptop: '1024px',
    },

    container: {
      padding: '1rem',
      center: true,
    },

    // fontSize: {
    //   s1: [
    //     '30px',
    //     {
    //       fontWeight: 800,
    //     },
    //   ],
    // },
  },
  plugins: [],
};
