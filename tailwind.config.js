/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      rubik: ['Rubik', 'sans-serif'],
    },
    extend: {
      colors: {
        purple: '#A729F5',
        'dark-blue': '#313E51',
        'dark-blue-grey': '#3B4D66',
        'greyish-blue': '##626C7F',
        'light-blue': '#ABC1E1',
        'light-grey': '#F4F6FA',
        green: '#26D782',
        red: '#EE5454',
      },
      backgroundImage: {
        'mobile-dark': "url('/images/pattern-background-mobile-dark.svg')",
        'mobile-light': "url('/images/pattern-background-mobile-light.svg')",
        'desktop-dark': "url('/images/pattern-background-desktop-dark.svg')",
        'desktop-light': "url('/images/pattern-background-desktop-light.svg')",
      },
    },
  },
  plugins: [],
}
