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
        gridTemplateColumns: {
          '24': 'repeat(24, minmax(0, 1fr))',
        },
        gridColumn: {
          'span-23': 'span 23 / span 23',
          'span-24': 'span 24 / span 24',
        },
        gridColumnStart: {
          '13': '13',
          '14': '14',
          '15': '15',
          '16': '16',
          '17': '17',
          '18': '18',
          '19': '19',
          '20': '20',
          '21': '21',
          '22': '22',
          '23': '23',
          '24': '24'
        },
        gridColumnEnd: {
          '13': '13',
          '14': '14',
          '15': '15',
          '16': '16',
          '17': '17',
          '18': '18',
          '19': '19',
          '20': '20',
          '21': '21',
          '22': '22',
          '23': '23',
          '24': '24',
          '25': '25'
        }
      },
    },
    plugins: [require('tailwindcss-primeui')],
  };
  