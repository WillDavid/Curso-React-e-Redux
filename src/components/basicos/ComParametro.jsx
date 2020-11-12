import React from "react";
export default function ComParametro(props) {
    const statusAprovacao = props.nota >= 7 ? 'Aprovado': 'Reprvoado';
    return (
        <div>
            <br/>
            <h2>{props.title}</h2>
            <h3>O aluno(a) {props.nomeAluno} tem nota {props.nota}</h3>
            <h3>{statusAprovacao}</h3>
        </div>
    );
}
