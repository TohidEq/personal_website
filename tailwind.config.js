module.exports = {
  content: [
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './public/index.html',
    './public/backindex.html',
  ],
  theme: {
    extend: {
      fontFamily:{
         'istok':'Istok Web'
      },
      colors: {
        'custom-navy': '#10316B',
        'black': '#000000',
        'custom-orange': '#E25822',
        'custom-gray': '#ECECEB'
      },
      backgroundImage: {
        'bg-about': "url('../img/bg-about.svg')",
      },
    }
    
  },
  plugins: [],
}
