// tailwind.config.js


module.exports = {
  content: [
    "./**/*.{html,js}",
    './src/**/*.{html,js,jsx,ts,tsx,css}', // Adjust paths as per your project structure
    './components/**/*.{html,js,jsx,ts,tsx}',
    './pages/**/*.{html,js,jsx,ts,tsx}', // For Next.js projects
  ],
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
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader', // Ensure this loader is included
        ],
      },
    ],
  },
  plugins: [],
};

