import { Meta, StoryObj } from "@storybook/react"
import Button, { ButtonProps } from "./Button"

//essa pagina é referente aos componentes a parte que fica no menu lateral


const meta: Meta<typeof Button> = {
    title: 'Moleculas/Button',
    // tags: ['autodocs'],  com isso ele cria um documento automatico porém estamos realizando manual no intro.mdx
    component: Button,
    argTypes: {}
}

//exportar como padrão, objeto default é conhecido como meta
export default meta

//variantes do componente, todos os tipos que o componente poderá ter
//com o typeof Button mostra que é do tipo generico e agora do tipo button, possuindo todas caracteristicas do button
export const Primary: StoryObj<ButtonProps> = {
    args: { //propriedades do button
        children: 'Botão',
    }
}

//novo story, essa constante tem o tipo StoryObj como estrutura, e tem propriedades de estilo button
export const Violet: StoryObj<ButtonProps> = {  //aqui é aonde fica no menu lateral
    args: {
        children: 'Botão',
        className: 'theme-violet'
    }
}