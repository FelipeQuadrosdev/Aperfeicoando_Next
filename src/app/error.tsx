"use client"
import { useEffect } from "react";

export default function Erro({ error, reset }: { error: Error; reset: () => void }) {

    useEffect(() => {

    }, [error])

    return (
        <div>
            <h2>Error, 404!</h2>
            <p>{error.message}</p> {/* Exibindo a mensagem de erro */}
            <button onClick={reset}>Tentar novamente</button>
        </div>
    );
}