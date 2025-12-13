/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          aurora: {
             bg: "#030014", // Deep Space
             card: "rgba(255, 255, 255, 0.05)",
             border: "rgba(255, 255, 255, 0.1)",
             text: {
                primary: "#FFFFFF",
                secondary: "#94a3b8", // Slate 400
                accent: "#c084fc", // Purple 400
             }
          }
        },
        fontFamily: {
          sans: ['"Outfit"', 'sans-serif'], // Primary font
        },
        backgroundImage: {
           'aurora-gradient': 'linear-gradient(to right, #4c1d95, #c026d3, #2563eb)', // Deep Purple -> Magenta -> Blue
           'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.01) 100%)',
        },
        animation: {
          'blob': 'blob 10s infinite',
          'float': 'float 6s ease-in-out infinite',
          'spin-slow': 'spin 15s linear infinite',
          'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        },
        keyframes: {
          blob: {
            '0%': { transform: 'translate(0px, 0px) scale(1)' },
            '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
            '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
            '100%': { transform: 'translate(0px, 0px) scale(1)' },
          },
          float: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-20px)' },
          }
        },
      },
    },
    plugins: [],
  }
