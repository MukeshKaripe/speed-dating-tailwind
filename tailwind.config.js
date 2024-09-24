// tailwind.config.js


module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        '30px': '30px',
    },
      spacing: {
        '100px': '100px',
      },
      screens: {
        xs: '480px',
        md: '768px',
      },
    },
  },
  plugins: [],
};

