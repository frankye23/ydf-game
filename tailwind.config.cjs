/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/index.html', './src/**/*.{vue,js,ts,jsx,tsx}', 'node_modules/preline/dist/*.js'],
  theme: {
    extend: {
      fontFamily: {
        nunito: '"Nunito", sans-serif',
      },
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      width: {
        160: '40rem',
        180: '45rem',
      },
      height: {
        112: '28rem',
      },
      scale: {
        101: '1.01',
      },
    },
  },
  plugins: ['@tailwindcss/forms', require('preline/plugin')],
}