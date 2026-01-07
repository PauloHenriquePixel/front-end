"use client"
import { useState } from "react";



const Contador = () => {
    const [Valor, setValor] = useState(0);

    return (
        <div className="flex gap-4">
            <h1>{Valor}</h1>
            <button onClick={() => setValor(Valor + 1)}className="bg-cyan-500 p-6 rounded-md hover:bg-cyan-900" >Adicionar</button>
            <button onClick={() => setValor(Valor - 1)}className="bg-cyan-500 p-6 rounded-md hover:bg-cyan-900" >Remover</button>
        </div>
    )
}
export default Contador;