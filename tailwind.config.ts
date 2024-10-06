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
      extend: {
        fontFamily: {
          sans: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace'],
        },
      },
    },
    plugins: [require('tailwindcss-primeui')],
  };
  