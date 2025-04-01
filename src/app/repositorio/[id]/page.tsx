interface IdProps {
    params: {
        id?: string
    }
}

export default function RepositorioId({ params }: IdProps) {
    return (
        <div>
            <span>Bem vindo ao Repositorio seu id é {params?.id}</span>
        </div>
    )
}