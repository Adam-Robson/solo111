import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        sm: '0.750rem',
        base: '1rem',
        xl: '1.333rem',
        '2xl': '1.777rem',
        '3xl': '2.369rem',
        '4xl': '3.158rem',
        '5xl': '4.210rem'
      },
      fontFamily: {
        heading: 'Cairo Play',
        body: 'Baloo 2'
      },
      fontWeight: {
        light: '300',
        normal: '400',
        bold: '500'
      }
    }
  },
  plugins: []
}
export default config
