/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      {
        oxTheme: {
          primary: "#10468f",
          secondary: "#9792db",
          accent: "#4df9da",
          neutral: "#25242e",
          "base-100": "#fcfcfd",
          info: "#76b7db",
          success: "#115544",
          warning: "#eea858",
          error: "#fb6851",
        },
      },
    ],
  },
};
