/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    extend: {
      spacing: {
        '128': '975px',
      },
      fontFamily: {
        'Oswald': ['Oswald'],
        'Montserrat': ['Montserrat'],
      },
      backgroundImage: {
        'bg-banner': "url('/images/bg-banner.jpg')",
        'review': "url('/images/review-image.jpg')",
      }
    },
  },
  plugins: [],
}

