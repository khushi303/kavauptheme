/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'linearbtn': 'var(--linear-btn)',
      },
      container: {
        padding: '20px',
        center: true,
      },
      fontSize: {
        'xsm': '12px',
        'sm': '18px',
        'md': '20px',
        'xmd': '24px',
        'xsmd': '28px',
        'xslg': '32px',
        'xlg': '36px',
        'lg': '40px',
        'xl': '48px',
        'xxl': '56px'
      },
      colors: {
        'primary': 'var(--color-primary)',
        'infinite-100': 'var(--color-infinite-100)',
        'infinite-200': 'var(--color-infinite-200)',
        'logocolortext': 'var(--logo-text)',
        'navtextcolor': 'var(--nav-textcolor)',
        'navtexthover': 'var(--nav-hovercolor)',
        'bgheader': 'var(--header-bg)',
        'headingcolor': 'var(--header-headingcolor)',
        'btntext': 'var(--btn-textcolor)',
        'bgcircle': 'var(--header-bgcircle)',
        'black-100': '#222831',
        'black-800': '#080F1D',
        'bgprocess': 'var(--bg-process)',
        'learncolor': 'var(--learn-textcolor)'
      },
      lineHeight: {
        xsm: '22px',
        md: '120%',
        lg: '125%',
        sxl: '135%',
        xl: '142%',
        xxl: '178%',
        xsxxl: '200%',
        xsxl: '222%',
      },
      borderRadius: {
        'xxl': '30px',
      }
    },
  },
  plugins: [
  ],
};
