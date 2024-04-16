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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      container: {
        padding: '24px',
        center: true,
      },
      fontSize: {
        'xsm': '12px',
        'sm': '18px',
        'xmd': '20px',
        'md': '24px',
        'xlg': '32px',
        'lg': '40px',
        'xl': '48px',
        'xxl': '56px'
      },
      colors: {
        'primary': 'var(--color-primary)',
      },
      lineHeight: {
        xsm: '21.56px',
        sm: '32px',
        md: '34px',
        lg: '36px',
        xl: '57.6px',
        xxl: '70px'
      }
    },
  },
  plugins: [
  ],
};
