/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { DEFAULT_THEME } = require('@mantine/core');
const mantineColorsForTailwind = {};
for (const [name, colors] of Object.entries(DEFAULT_THEME.colors)) {
  mantineColorsForTailwind[name] = colors.reduce((acc, cur, i) => {
    return { ...acc, [i]: cur };
  }, {});
}

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: mantineColorsForTailwind,
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
