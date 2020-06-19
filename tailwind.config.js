module.exports = {
  purge: false,
  purge: {
    content: ['./index.html', './src/**/*.js', './src/**/*.vue'],
    options: {
      whitelistPatterns: [/.*transition.*/],
      whitelistPatternsChildren: [/.*transition.*/],
    },
  },
  theme: {
    fontFamily: {
      // caption uses the systemfont so it looks more native
      display: ['caption'],
      body: ['caption'],
    },
    extend: {
      colors: {
        primary: {
          100: '#91C4D7',
          200: '#65ACC8',
          300: '#4FA0C0',
          400: '#4091B1',
          500: '#387F9B',
          600: '#306D85',
          700: '#285B6F',
          800: '#204959',
          900: '#183642',
        },
      },
    },
  },
  variants: {
    outline: ['focus', 'hover'],
    border: ['focus', 'hover'],
  },
  plugins: [],
}
