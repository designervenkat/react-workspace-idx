/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        'brand-primary': "#d2cdff",
        "brand-secondary": "#5c14ff"
      },
    },
  },
  plugins: [],
}

