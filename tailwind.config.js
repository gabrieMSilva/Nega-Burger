/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',       // arquivo HTML principal
    './**/*.{html,js}', // qualquer arquivo HTML ou JS/TS em qualquer pasta do projeto
  ],
  theme: {
    extend: {
      backgroundImage:{
        'home':"url(/bg.jpg)"
      },
    },
  },
  plugins: [],
}

