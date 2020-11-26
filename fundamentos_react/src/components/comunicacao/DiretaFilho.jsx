import React from 'react'

export default function DiretaFilho(props){
    return (
        <div>
            <span>{props.text} </span>
            <span>{props.number} </span>
            <span>{props.bool ? 'Verdadeiro' : 'Falso'}</span>
        </div>
    )
}