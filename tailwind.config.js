module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      'sm':'480px',
      'md':'768px',
      'lg':'992px',
      'xl':'1200px',
      'xxl':'1400px',
    },
    extend: {
      colors: {
        'transparentBlack': 'rgba(0, 0, 0, 0.8)'
      },
      margin: {
        '1rem': '16px',
        '2rem': '32px',
        '3rem': '48px',
        '4rem': '64px',
        '5rem': '80px',
        '6rem': '96px',
      },
      spacing: {
        '19rem': '304px',
        '21rem': '336px',
        '50rem': '800px',
      },
      inset: {
        '4.7rem': '75.2px',
        '1.0rem': '16px',
        '7.5rem':'120px',
        '33rem': '528px',
        '27rem': '432px',
        '10.1rem':'161.6px'
      },
      width: {
        '31rem': '496px',
        '22rem': '352px'
      }
    },
  },
  plugins: [],
}
