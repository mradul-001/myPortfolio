/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Geist", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
        mono: ['"Geist Mono"', "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      colors: {
        canvas: "var(--color-base)",
        surface: "rgb(var(--surface-rgb) / <alpha-value>)",
        surfacealt: "var(--color-surface-alt)",
        ink: "rgb(var(--ink-rgb) / <alpha-value>)",
        muted: "var(--color-muted)",
        faint: "var(--color-faint)",
        accent: "var(--color-accent)",
        accentsoft: "var(--color-accent-soft)",
        border: "var(--color-border)",
      },
      maxWidth: {
        page: "72rem",
      },
    },
  },
  plugins: [],
};
