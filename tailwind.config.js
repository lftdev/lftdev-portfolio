/** @type {import('tailwindcss').Config} */
export const content = ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}']
export const theme = {
  extend: {
    animation: {
      'clircle-in-center': '2.5s cubic-bezier(.25, 1, .30, 1) circle-in-center both'
    }
  }
}
export const plugins = []
