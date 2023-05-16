/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      blue: {
        500: "#3B82F6",
      },
      gray: '#111827',
      black: "#000000",
      white: "#FFFFFF",
      light: {
        100: "#E2E8F0",
      },
      dark: {
        200: "#333333",
        100: "#555555",
      },
      green: {
        300: "#008800",
        200: "#228822",
        100: "#668866",
      },
      neonGreen: '#39ff14',
      red: '#cc0000',
      blue: {
        300: '#93c5fd'
      },
      sky: {
        600: '#0284c7',
        700: '#0369a1',
        800: '#075985',
        900: '#0c4a6e'
      }
    },

    extend: {},
  },
  plugins: [],
}

