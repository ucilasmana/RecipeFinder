/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jost:['var(--font-jost)'],
        paytone: ['var(--font-paytone)'],
        catamaran:['var(--font-catamaran)']
      },
      colors: {
        'ourGreen': '#36552c',
      },
      fontSize: {
        'xxs': '11px',
        'xl-1': '21px',
        '2xl-1': '28px',
        '4xl-1': '40px',
        '5xl-1': '54px',
      },
      width: {
        '17' : '68px',
        '68' : '17rem',
        '70' : '270px',
        '86' : '22rem',
        '100': '25rem',
        '104':'26rem',
        '120': '30rem',
        '136':'34rem',
        '152':'38rem'
      },
      height: {
        '17' : '68px',
        '68' : '260px',
        '70' : '270px',
        '86' : '22rem',
        '100': '25rem',
        '104':'26rem',
        '120': '30rem',
        '136':'34rem',
        '152':'38rem'

      },
      screens: {
        'xs':'340px',
        'xs-1':'410px',
        'xs-2':'450px',
        'sm-1':'500px',
        'sm-2':'550px',
        'sm-3':'600px',
        'md-1':'680px',
        'md-2':'820px',
        'lg-1':'900px',
        'xl-1':'1100px',
        'xl-2':'1200px',
        '2xl-1':'1300px',
     },
    },
  },
  plugins: [],
};
