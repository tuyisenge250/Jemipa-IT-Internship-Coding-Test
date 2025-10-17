/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class", // Enables dark mode via .dark class
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
    "./pages/**/*.{ts,tsx,js,jsx}",
    "./public/**/*.html",         
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#1a202c",
        darkText: "#f7fafc",
      },
    },
  },
  plugins: [],
};