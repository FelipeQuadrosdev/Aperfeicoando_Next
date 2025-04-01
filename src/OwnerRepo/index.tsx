"use client"

import { useState } from "react";
import Image from "next/image";
interface OwerProps {
    avatar_url: string;
    nome: string
}
export function OwnerRepo({ avatar_url, nome }: OwerProps) {
    const [show, setShow] = useState(false)


    return (
        <div>
            {show && (
                <>
                    <Image
                        src={avatar_url}
                        priority
                        alt="Imagem do avatar"
                        width={24}
                        height={24}
                    />
                    <strong>{nome}</strong>
                </>
            )}
            <button onClick={() => setShow(!show)}>{show ? "Ocultar Nome" : "Mostrar Nome"}</button>
        </div>
    )
}   
