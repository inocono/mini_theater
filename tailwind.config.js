module.exports = {
  content: [
    './app/views/**/*.html.erb',
    './app/assets/stylesheets/**/*.css',
    './app/javascript/**/*.js'
  ],
  purge: [
    './app/views/**/*.html.erb',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
