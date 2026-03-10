/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#e91e8c",
        "primary-dark": "#c41779",
        "primary-light": "#fce4f3",
        secondary: "#2d1b4e",
        "secondary-light": "#4a2d7a",
        accent: "#6c3483",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        heading: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
