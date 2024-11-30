/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        spotify: ["Spotify Mix", "sans-serif"],
      },
      colors: {
        green: "#57B660",
        lightblack: "#2A2A2A",
        garylight:"#b3b3b3"
      },
    },
  },
  plugins: [],
};
