
/**
 * how to clasify colors outside of my main color list
 */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
      primary: {
        50: '#f8fafc',
        100: '#f1f5f9',
        200: '#e2e8f0',
        300: '#cbd5e1',
        400: '#94a3b8',
        500: '#64748b',
        600: '#475569',
        700: '#334155',
        800: '#1e293b',
        900: '#0f172a',
      },
      green: '#02d402',
      redMac: '#FF605C',
      yellowMac: '#FFBD44',
      greenMac: '#00CA4E',

    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      special: ['Special Elite'],
      menlo: ['Menlo-Regular', 'Menlo']
    },
    animation: {
      'bounce-slow': 'bounce 5s linear infinite'
    }
  },
  plugins: [],
}
