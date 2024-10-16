/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    extend: {
      colors: {
        'custom-dark': '#01000f',
        'custom-mid': '#22191f',
        'custom-light': '#1d012e',
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('daisyui'),],
}

