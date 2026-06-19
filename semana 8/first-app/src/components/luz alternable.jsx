import { useState } from "react";

export function Interruptor () {
    const [encendido,  setEncendido] = useState(false);
    return(
        <div style= {{padding: "20px" , marginTop: "10px" , 
            background: encendido ? "#fffde7" : "#e0e0e0" , color:
            "#333"}}>
                <h3>Interruptor</h3>
                <p>La luz esta: <strong>{encendido ? "encendido" : "apagada"}</strong></p>
                <button Onclick={() => setEncendido(!encendido)}>
                    {encendido ? "Awpagar" : "Encender"}
                </button> 
        </div>
    )
}