import { Metadata } from "next"



export const metadata: Metadata = {
    title: "Sobre-Empresa",
    description: "Essa pagina fala sobre a empresa",
    keywords: ["CSS", "SEO", "JavaScript", "TypeScript"],
    openGraph: {
        title: "Minha foto do Sistema",
        images: ["https://encurtador.com.br/VbVMY"],
        description: "Essa minha foto do Linkedin",
    },
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: true,
        }
    }

}

export default function Sobre() {

    return (
        <div >
            <h1>Sou a pagina Sobre</h1>
            <span>Aqui falaremos sobre a empresa como as metadata são importante para os buscadores de busca do google</span>
        </div>
    )
}