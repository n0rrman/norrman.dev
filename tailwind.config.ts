import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))'
      },
      colors: {
        blueFrom: 'hsl(var(--color-blueFrom) / <alpha-value>)',
        blueTo: 'hsl(var(--color-blueTo) / <alpha-value>)',
      }
    }
  },
  plugins: [],
}
export default config
