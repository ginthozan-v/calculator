module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      Mosk: "'Mosk', sans-serif",
      Lato: "'Lato', sans-serif"
    },
    extend: {
      animation: {
        blob: 'blob 7s infinite'
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)"
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)"
          },
          "66%": {
            transform: "translate(-20px, 20px)  scale(0.9)"
          },
          "100%": {
            transform: "translate(0px, 0px)  scale(1)"
          }
        }
      }
    },
  },
  plugins: [require('@tailwindcss/forms'),],
}
