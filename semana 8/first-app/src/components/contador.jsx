import { useState } from "react";

export function contador(){
    const [contador, setContador] = useSTATE(0);

    return (
        <div style= {{ padding:"20px" , berder:"1px solid #ccc"}}>
            <h3>Ejercicio 1: Contador</h3>
            <p>Valor actual:<strong>{contador}</strong></p>
            <button onClick={() => setContador(contador + 1)}
            >incrementar</button> 
            <button onClick={() => setContador(contador - 1)} style =
            {{marginleft: "10px"}}>Disminuir</button>
        </div>
    )
}