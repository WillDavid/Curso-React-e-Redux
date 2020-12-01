import React, {useState} from 'react'
import '../formulario/Input.css'

export default function Input(props){


    const [valor, setValor] = useState(" ")

    function quandoMudar(e){
        setValor(e.target.value)
     }
    return(
        <div className="InputClass">
            <h2>{valor}</h2>
            <input type="text" value={valor} onChange={quandoMudar}/>
        </div>
    )
}