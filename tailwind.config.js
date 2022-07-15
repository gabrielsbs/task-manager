/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      gridTemplateColumns: {
        30: 'repeat(30, minmax(150px, 1fr))'
      },
      colors: {
        gray: {
          100: '#FBFAFF',
          300: '#F3F4F8',
          500: '#8C97A8',
          700: '#5F6388'
        },
        purple: {
          100: '#D2D3F8',
          700: '#5051F9'
        },
        blue: {
          100: '#F4FAFF',
          200: '#C9E1F7',
          300: '#1EA7FF'
        },
        orange: {
          100: '#FFF2EA',
          300: '#F6BC3E',
          500: '#FE7F2E'
        },
        green: {
          100: '#C4F2E7',
          400: '#2CDE9A'
        }
      }
    }
  },
  plugins: []
}
