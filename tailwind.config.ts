import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      }, 
      screens:{
        'sm-x3':{"max":"390px"}, 
        'sm-x2':{"max":"500px"},
        'sm':{"max":"767px"},
        'md':{"max":"900px"},
        'lg':{"max":"1200px"},
        'lg-x2':{"min":"1201px"},
       
      },
    },
  },
  plugins: [
    require("flowbite/plugin")
   ],
}
export default config
