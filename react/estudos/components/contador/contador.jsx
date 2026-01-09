"use client"
import { useState } from "react";



const Contador = (props) => {
    const [Valor, setValor] = useState(props.inicial);

    return (
        <div className="flex gap-4 color-cyan-500 justify-center mb-3 rounded-md p-6 text-2xl decoration-pike-500 bg-cyan-700">
            <h1>{Valor}</h1>
            <button onClick={() => setValor(Valor + 1)}className="bg-cyan-500 p-6 rounded-md hover:bg-cyan-900" >Adicionar</button>
            <button onClick={() => setValor(Valor - 1)}className="bg-cyan-500 p-6 rounded-md hover:bg-cyan-900" >Remover</button>
        </div>
    )
}
export default Contador;