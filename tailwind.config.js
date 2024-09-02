/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  daisyui: {
    themes: [
      {
        default: {
          primary: "#60a5fa",
          secondary: "#c7d2fe",
          accent: "#e9d5ff",
          neutral: "#f3f4f6",
          "base-100": "#ffffff",
          info: "#7dd3fc",
          success: "#6ee7b7",
          warning: "#fcd34d",
          error: "#f87171",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
