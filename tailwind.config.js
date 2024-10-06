import { COLORS, FONT_SIZES } from "./src/config/constants";

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: COLORS.primary,
        secondary: COLORS.secondary,
        button: COLORS.button,
        border: COLORS.border,
        primaryText: COLORS.primaryText,
        secondaryText: COLORS.primaryText,
      },
      fontSize: {
        small: FONT_SIZES.small,
        medium: FONT_SIZES.medium,
        large: FONT_SIZES.large,
        title: FONT_SIZES.title,
      },
    },
  },
  plugins: [],
};
