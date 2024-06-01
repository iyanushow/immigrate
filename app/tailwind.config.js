/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        crs: '0 0 10px rgba(0, 0, 0, 0.1)'
      }
    }
  },
  plugins: []
};
