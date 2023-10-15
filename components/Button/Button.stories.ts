import { Meta, StoryObj } from "@storybook/react"
import Button from "./Button"

const meta: Meta<typeof Button> = {
    title: 'Button',
    tags: ['autodocs'],
    component: Button,
    argTypes: {}
}

//exportar como padrão, objeto default é conhecido como meta
export default meta

//variantes do componente, todos os tipos que o componente poderá ter
//com o typeof Button mostra que é do tipo generico e agora do tipo button, possuindo todas caracteristicas do button
export const Primary: StoryObj<typeof Button> = {
    args: { //propriedades do button
        children: 'Botão',
    }
} 