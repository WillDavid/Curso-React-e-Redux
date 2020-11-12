import React from 'react';

export default function Aleatorio(props){
    const randomNumber = Math.random() * (props.max - props.min) + props.min;
    return (
        <div>
            <h1>Valor Máximo: {props.max}</h1>
            <h1>Valor Mínimo: {props.min}</h1>
            <h1>Número Aleatório: {Math.ceil(randomNumber)}</h1>
            <br/>
        </div>
    );

}