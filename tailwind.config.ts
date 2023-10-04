import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: { //colocando embaixo do theme dentro das chaves {} voce sobrescreve as cores padrão 
    // colors: {

    // },
    extend: { // inserindo mais um modelo não sobrescrevendo nada
      // colocando aqui as variaveis para usar no global depois

    },
  },
  plugins: [],
}
export default config
