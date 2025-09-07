/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          dark: "#0c1d36",          
          accent: "#55e6c1",        
          accent2: "#6aa9ff",        
        },
        boxShadow: {
          glow: "0 0 0 2px rgba(255,255,255,0.08), 0 8px 30px rgba(85,230,193,0.25)",
        },
        backgroundImage: {
          mesh: "radial-gradient(1200px 700px at 75% 25%, rgba(90,160,255,0.15), transparent 60%), radial-gradient(900px 500px at 20% 60%, rgba(85,230,193,0.15), transparent 60%)",
        },
      },
    },
    plugins: [],
  }