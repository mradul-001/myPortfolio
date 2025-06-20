/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        audiowide: ["Audiowide", 'sans-serif'],
        oddlini: ['Oddlini', 'sans-serif'],
        zain: ['zain', 'sans-serif'],
        teko: ['teko', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        outfit: ['outfit', 'sans-serif'],
        raleway: ['ra;eway', 'sans-serif']
      },
    },
  },
  plugins: [],
}

