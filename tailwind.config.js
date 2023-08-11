/** @type {import('tailwindcss').Config} */
export const content = ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}']
export const theme = {
  extend: {
    keyframes: {
      'clircle-in-center': {
        from: {
          'clip-path': 'circle(0%)'
        },
        to: {
          'clip-path': 'circle(125%)',
          content: 'B'
        }
      }
    },
    animation: {
      'clircle-in-center': '2.5s cubic-bezier(.25, 1, .30, 1) circle-in-center both'
    }
  }
}
export const plugins = []
