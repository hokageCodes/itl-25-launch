/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F0DAC5",  // Cream/Beige color
        deepBlue: "#1C2340",  // Deep Blue color
        wine: "#50223C",  // Maroon/Wine color
        butter: "#FAD688",  // A soft butter color for CTAs
        darkBrown: "#3D1E2A",  // Darker brown for dark theme
      },
    },
  },
  plugins: [],
}

