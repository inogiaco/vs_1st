import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8', // TODO: アクセントカラー決定後に変更
      },
    },
    container: {
      center: true,
      padding: '1rem',
    },
  },
  plugins: [],
}
export default config