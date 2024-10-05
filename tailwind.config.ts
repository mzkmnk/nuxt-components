module.exports = {
    content: [
      './components/**/*.{vue,js,ts}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './composables/**/*.{js,ts}',
      './plugins/**/*.{js,ts}',
      './app.vue',
      './nuxt.config.{js,ts}',
    ],
    theme: {
      extend: {},
    },
    plugins: [require('tailwindcss-primeui')],
  };
  