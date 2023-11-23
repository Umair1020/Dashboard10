/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "neutral-200": "#f2f2f2",
        "maincolors-algawali-primary-2": "#253061",
        "neutral-whitepure": "#fffbfa",
        "neutral-500": "#c3d0d4",
        "maincolors-algawali-secondry-color-dark": "#107243",
        "maincolors-algawali-background-color": "#f2f5ff",
        "neutral-700": "#434146",
        "neutral-800": "#262f32",
        "neutral-300": "#ebebeb",
        "neutral-600": "#8c979c",
        "maincolors-algawali-primary": "#031d92",
        firebrick: "rgba(205, 36, 36, 0.1)",
        "statuscolor-red": "#cd2424",
        "neutral-400": "#e3e3e3",
        forestgreen: "rgba(12, 139, 63, 0.1)",
        "statuscolor-green": "#0c8b3f",
        "neutral-7001": "#4e5a5e",
      },
      spacing: {},
      fontFamily: {
        medium: "HelveticaNeueCyr",
      },
      borderRadius: {
        "20xl": "39px",
        "corner-radius-16-round-2": "16px",
        "corner-radius-12-round": "12px",
        "corner-radius-8-round": "8px",
        "corner-radius-4-round": "4px",
      },
    },
    fontSize: {
      xs: "12px",
      base: "16px",
      "3xs": "10px",
      sm: "14px",
      lg: "18px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
