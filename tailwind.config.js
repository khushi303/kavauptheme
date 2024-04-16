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
      },
      lineHeight: {
        xsm: '22px',
        sm: '32px',
        md: '34px',
        lg: '125%',
        sxl: '40px',
        xl: '57.6px',
        xxl: '70px'
      },
      borderRadius: {
        'xxl': '30px',
      }
    },
  },
  plugins: [
  ],
};
