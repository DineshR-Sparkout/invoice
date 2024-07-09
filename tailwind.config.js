/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
    theme: {
    extend: {
      screens: {
        xs:'400px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1200px',
        '2xl': '1440px',
      },
      container: {
        center: true,
        screens: {
          sm: '600px',
          md: '720px',
          lg: '960px',
          xl:'1140px',
          '2xl':'1140px'
        },
        padding:'16px'
      },
    },
    colors:{
      'baltic-sea':'#3a3f45',
      'harmonies':'#7b8586',
      'echo-blue':'#373b46',
      'white':'#ffffff',
      'sauvignon':'#e6e8e5'
    },
  },
  plugins: [],
}

