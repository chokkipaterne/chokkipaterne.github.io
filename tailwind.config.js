/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2876f9',
        secondary: '#6d17cb',
        tertiary: '#E5EAED',
        dark: '#212425',
        'green-light': '#8fd24b',
        'light-bold': '#FFFFFF',
        'light-text': '#A6A6A6',
        'light-gray': '#44566C',
      },
      boxShadow: {
        card: '0px 35px 120px -15px #211e35',
      },
      screens: {
        xs: '450px',
      },
      backgroundImage: {
        homeBg: "url('/src/assets/bg.jpg')",
        'homeBg-dark': "url('/src/assets/bg-dark.jpg')",
      },
    },
  },
  plugins: [],
};
