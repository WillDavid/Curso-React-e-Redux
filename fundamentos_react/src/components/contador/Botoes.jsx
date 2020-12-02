import React from 'react'


export default function Botoes(props){
    return (
        <div>
            <button onClick={props.incrementar}>Contar</button>
            <button onClick={props.decrementar}>Decrementar</button>
        </div>
    )
}