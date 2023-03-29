/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        green: '#A0E047',
        black: '#000000',
        white: '#FFFFFF',
        darkBlue: '#2E0AA8',
        lemon: '#DFF757',
        purple: '#6A24EC',
        blue: '#2141b5',
        r_orange: '#EE6623',
      },
      fontFamily: {
        lalezar: ['Lalezar', 'cursive'],
        sans: ['Lato', 'sans-serif'],
        barcode: ['Libre Barcode 39 Text', 'cursive'],
      },
      screens: {
        mobile: { max: '469px' },
        tablet: { max: '768px', min: '470px' },
        laptop: { max: '1024px', min: '769px' },
        desktop: '1440px',
      },
      fontSize: {
        sm: '0.8rem', //14
        base: '1rem', //16
        xl: '1.25rem', //20
        '2xl': '1.563rem', //24
        '3xl': '1.953rem', //30
        '4xl': '2.441rem', //36
        '5xl': '3.052rem', //48
      },
      gridTemplateColumns: {
        fill: 'repeat( auto-fit, minmax(250px, 1fr) )',
      },
      boxShadow: {
        custom: '10px 10px 0 #000',
      },
    },
  },
  plugins: [],
}
