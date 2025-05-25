/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      animation: {
        "fade-in": "fadeIn 1s ease-out forwards",
        "fade-up": "fadeUp 1s ease-out forwards",
        "slide-in-left": "slideInLeft 1s ease-out forwards",
        "zoom-in": "zoomIn 1s ease-out forwards",
        "flip-in": "flipIn 1s ease-out forwards",
        "scale-in": "scaleIn 1s ease-out forwards",
        "rise-in": "riseIn 1.2s ease-out forwards",
        "pulse-in": "pulseIn 1.4s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: 0, transform: "translateX(-50px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        zoomIn: {
          "0%": { opacity: 0, transform: "scale(0.9)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
        flipIn: {
          "0%": { opacity: 0, transform: "rotateY(90deg)" },
          "100%": { opacity: 1, transform: "rotateY(0deg)" },
        },
        scaleIn: {
          "0%": { opacity: 0, transform: "scale(0.8)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
        riseIn: {
          "0%": { opacity: 0, transform: "translateY(60px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        pulseIn: {
          "0%, 100%": { transform: "scale(1)", opacity: 0 },
          "50%": { transform: "scale(1.05)", opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
