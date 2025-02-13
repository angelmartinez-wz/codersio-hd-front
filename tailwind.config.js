const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ...colors,
        info: "#E1CA31",
        warning: "#FC9B63",
        error: "#E45959",
        success: "#3CAA18",
        primary_1: "#65558F",
        primary_2: "#59468A",
        primary_3: "#8175A2",
      },
    },
  },
  plugins: [],
};
