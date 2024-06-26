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
        'righttick': 'var(--right-tick)',
        'fullsize': '100% 100%'
      },
      container: {
        padding: '20px',
        center: true,
      },
      fontSize: {
        'xd': '28px',
        'sd': '32px',
        'ls': '40px',
        'xxl': '56px'
      },
      colors: {
        'infinite-100': 'var(--color-infinite-100)',
        'infinite-200': 'var(--color-infinite-200)',
        'logocolortext': 'var(--logo-text)',
        'navtextcolor': 'var(--nav-textcolor)',
        'navtexthover': 'var(--nav-hovercolor)',
        'bgheader': 'var(--header-bg)',
        'headingcolor': 'var(--header-headingcolor)',
        'btntext': 'var(--btn-textcolor)',
        'bgcirclehead': 'var(--header-bgcircle)',
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
        'bgcircle': 'var(--bg-circlecolor)',
        'bghelpcircle': 'var(--bg-circlecolor)',
        'bglayer': 'var(--bg-layer)',
        'helpcolor': 'var(--help-stopcolor)',
        'helpcolor-100': 'var(--help-stopcolor1)',
        'setcolor1': 'var(--set-fill1)',
        'setcolor2': 'var(--set-fill2)',
        'setcolor3': 'var(--set-fill3)',
        'setcircle': 'var(--set-circle)'
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
