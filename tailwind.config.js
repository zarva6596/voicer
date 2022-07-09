/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  purge: [
    './assets/**/*.{css}',
    './components/*.{vue,js}',
    './components/**/*.{vue,js}',
    './layouts/**/*.{vue, js}',
    './pages/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './*.{vue,js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#fff',
        black: '#000',
        blue: '#20A1FF',
        grey: '#c4c4c4',
        itemGrey: '#f5f5f5',
        micGrey: '#b7b7b7',
        capGrey: '#e7e7e7',
        dark: '#3a3a3a',
        lightGrey: '#e6e6e6',
        comment: '#A49393',
        comment2n: 'rgba(0, 0, 0, 0.4)',
        commentBg: '#ECE3E3',
        commentBg2n: '#E3ECE6',
        dropMenuBtn: '#8e8e8e',
      },
    },
  },
  plugins: [],
}
