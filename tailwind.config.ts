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
      keyframes: {
        flyRight: {
          '0%': { transform: 'translateX(-100vw)' },
          '100%': { transform: 'translateX(100vw)' }, 
        },
      },
      animation: {
        flyRight: 'flyRight 1s ease-in',
      },
      screens: {
        'mini': '375px'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))'
      },
      colors: {
        bluishWhite: '#e1e8fc',
        blueFrom: 'hsl(var(--color-blueFrom) / <alpha-value>)',
        blueTo: 'hsl(var(--color-blueTo) / <alpha-value>)',
      }
    }
  },
  plugins: [],
}
export default config
