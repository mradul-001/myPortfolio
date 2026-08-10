/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        audiowide: ["Audiowide", 'sans-serif'],
        oddlini: ['Oddlini', 'sans-serif'],
        zain: ['zain', 'sans-serif'],
        teko: ['teko', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        outfit: ['outfit', 'sans-serif'],
        raleway: ['ra;eway', 'sans-serif'],
        marcellus: ['Marcellus', 'serif'],
      },
      colors: {
        base: "var(--color-base)",
        surface: "var(--color-surface)",
        surfacealt: "var(--color-surface-alt)",
        ink: "var(--color-ink)",
        muted: "var(--color-muted)",
        accent: "var(--color-accent)",
        border: "var(--color-border)",
      },
    },
  },
  plugins: [],
}

