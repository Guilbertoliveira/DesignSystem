//criando um componente personalizado e com funcionalidades de um botão
export type ButtonProps = {
    children: React.ReactNode;
} & React.ButtonHTMLAttributes<ButtonProps> //com isso conseguimos pegar as propriedades existente do botão e adicionar o children

const Button = ({ children, className }: ButtonProps) => {
    return (<button className={`
    bg-[#2D5BFF] rounded-[8px] px-[32px] py-[12px] text-white
    ${className}
    `
    }>{children}</button>)
}

export default Button