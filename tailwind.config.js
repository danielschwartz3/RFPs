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
          start: '#0072E6',
          end: '#0047C1',
        },
        accent: '#00B7D9',
        neutral: {
          gray: '#F5F7FA',
          dark: '#0B1220',
          body: '#394248',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}