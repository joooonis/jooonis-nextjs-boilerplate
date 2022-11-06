module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors: {
      primary: {
        orange: {
          300: '#F07F31',
          500: '#FF6800',
          800: '#A94500',
        },
        green: {
          300: '#64DA07',
          500: '#84D14E',
          800: '#40A900',
        },
        blue: {
          300: '#5BC7EC',
          500: '#0FBCE2',
          800: '#0087B1',
        },
      },
      system: {
        black: '#1A1A1A',
        white: '#FFFFE5',
        gray: {
          01: '#8E8E93',
          02: '#AEAEB2',
          03: '#C7C7CC',
          04: '#D1D1D6',
          05: '#E5E5EA',
          06: '#F2F2F7',
        },
        state: {
          eorro: '#BA1E45',
          info: '#B87503',
          success: '#3159B3',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
