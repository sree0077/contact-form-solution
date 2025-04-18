module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green-200': 'hsl(148, 38%, 91%)',
        'green-600': 'hsl(169, 82%, 27%)',
        'red': 'hsl(0, 66%, 54%)',
        'grey-500': 'hsl(186, 15%, 59%)',
        'grey-900': 'hsl(187, 24%, 22%)',
      },
      fontFamily: {
        karla: ['Karla', 'sans-serif'],
      },
    },
  },
  plugins: [],
}