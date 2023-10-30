import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true
    },
    extend: {
      backgroundImage: {
        'homepage': "url('/images/circlesun.png')",
        'biopage': "url('/images/clouds.png')"
      }
    }
  },
  plugins: [],
}
export default config
