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
        'activelinear': 'var(--tab-border)',
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
        'learncolor': 'var(--learn-textcolor)',
        'lightgray-400': '#46484B',
        'darkblack': '#131619',
        'bgemail': 'var(--bg-email)',
        'bgbtncolor': 'var(--email-btncolor)',
        'lightgray-500': '#58595B',
        'lightgray-700': '#22283180',
        'lightgray-800': '#03020D',
        'lightgray-900': '#4A494E',
        'tickcolor': 'var(--tick-circlecolor)'
      },
      lineHeight: {
        xsm: '22px',
        md: '120%',
        lg: '125%',
        sxl: '135%',
        xl: '142%',
        msxl: '150%',
        mxl: '156%',
        xlg: '160%',
        xxl: '178%',
        xsxxl: '200%',
        xsxl: '222%',
        mxxl: '250%',
      },
      borderRadius: {
        'md': '22.5px',
        'xxl': '30px',
      }
    },
  },
  plugins: [
  ],
};
