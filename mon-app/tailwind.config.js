/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
    theme: {
      extend: {
        colors: {
          'dark-blue': '#0E262F',
          'medium-blue': '#618098',
          'light-blue': '#AECFDF',
          'light-green': '#D8E5E2',
          'dark-green': '#3D8376',
        },
      },
    },
  plugins: [],
}

