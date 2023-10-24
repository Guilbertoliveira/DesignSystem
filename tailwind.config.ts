import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: { //colocando embaixo do theme dentro das chaves {} voce sobrescreve as cores/ e outras declarações padrões 
    extend: { // inserindo mais um modelo não sobrescrevendo nada
      colors: {
        primary: 'var(--primary)'
      },

    },
  },
  plugins: [],
}
export default config
