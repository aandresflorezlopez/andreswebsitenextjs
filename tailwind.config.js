module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
      'primary': {
        50: '#f8fafc',
        400: '#94a3b8',
      }

    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
    },
  },
  plugins: [],
}
