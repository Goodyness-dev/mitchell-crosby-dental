/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          DEFAULT: '#000000',
          pure: '#000000',
          card: '#0a0a0a',
          cardHover: '#111111',
          border: '#1e1e1e',
          subtle: '#2a2a2a',
        },
        shop: {
          red: '#0369a1',        // Dental Sapphire Blue
          redHover: '#075985',   // Deep Dental Ocean Blue
          dark: '#000000',
          charcoal: '#0a0a0a',
          body: '#4a4a4a',
          muted: '#717171',
          light: '#f0f9ff',
          border: '#e0f2fe',
        }
      },
      fontFamily: {
        heading: ['"Montserrat"', '"Inter"', 'system-ui', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
