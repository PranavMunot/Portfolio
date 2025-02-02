/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#412234', // Dark color for primary use
        },
        secondary: {
          DEFAULT: '#6d466b', // Softer purple color for secondary use
        },
        accent: {
          DEFAULT: '#b49fcc', // Highlight/Emphasis color
        },
        warm: {
          DEFAULT: '#ead787', // Soft warm yellow for backgrounds or accents
        },
        white: {
          DEFAULT: '#FFFFFF', // Base white
        },
      },
      flex: {
        '2': '2 2 0%',
        '3': '3 3 0%'
      }
    },
  },
  plugins: [],
}

