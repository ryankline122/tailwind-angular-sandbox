/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        'turquoise-blue': {
        '50': '#ecfeff',
        '100': '#cffbfe',
        '200': '#a5f4fc',
        '300': '#68e9f8',
        '400': '#30d7ee',
        '500': '#07b7d3',
        '600': '#0992b1',
        '700': '#0f758f',
        '800': '#165f74',
        '900': '#164f63',
        '950': '#083444',
      },
    },

      // colors(theme) {
      //   return {
      //     primary: {
      //       ...theme.colors.purple,
      //       DEFAULT: theme.colors.purple[500],
      //     },
      //   }
      // }
      // colors: {
      //   primary: {
      //     light: "#CC00CC",
      //     DEFAULT: "blue"
      //   }
      // }
    },
  },
  plugins: [],
}

