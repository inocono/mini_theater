module.exports = {
  content: [
    './app/views/**/*.html.erb',
    './app/helpers/**/*.rb',
    './app/assets/stylesheets/**/*.css',
    './app/javascript/**/*.js'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  daisyui: {
    themes: [],
  },
  plugins: [require("daisyui")],
  theme: {
    extend: {
        animation: {
            "text-focus-in": "text-focus-in 1s ease-in    "
        },
        keyframes: {
            "text-focus-in": {
                "0%": {
                    filter: "blur(12px)",
                    opacity: "0"
                },
                to: {
                    filter: "blur(0)",
                    opacity: "1"
                }
            }
        }
    }
  }
}
