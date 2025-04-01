"use client"
import { useState, useEffect } from "react";


interface DataProps {
    id: number;
    nome: string;
    idade: number;
    city: string;

}

export default function Contato() {
    const [data, setData] = useState<DataProps[]>([]);

    useEffect(() => {
        async function dados() {
            const novoArray: DataProps[] = [
                { id: 1, nome: "Felipe", idade: 30, city: "Sp" },
                { id: 2, nome: "Duda", idade: 4, city: "Sp" },
                { id: 3, nome: "Mah", idade: 27, city: "Sp" },

            ];

            setData(novoArray);
        }
        dados()
    }, [])


    function handleadd() {
        const valor1 = { id: 4, nome: "Penha", idade: 40, city: "mg" }

        setData((dado) => [...dado, valor1])
    }

    return (
        <div>
            {data.map((item) => (
                <div key={item.id}>
                    <strong>nome{item.nome}</strong>
                    <span>idade{item.idade}</span>
                    <p>Cidade:{item.city}</p>
                    <br />
                    <br />

                </div>

            ))}
            <button onClick={handleadd}>acessar </button>


        </div>
    );
}
