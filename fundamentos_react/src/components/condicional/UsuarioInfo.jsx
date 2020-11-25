import React from 'react'
import Condicional from './Condicional'

export default function UsuarioInfo(props){
    const usuario = props.usuario || {}
    return (
        <div>
            <Condicional test={usuario && usuario.nome}>
                Seja bem vindo <strong>{usuario.nome}</strong>!
            </Condicional>
            <Condicional test={!usuario || !usuario.nome}>
                Seja bem vindo <strong>Usuario anonimo</strong>!
            </Condicional>
            
        </div>
    )
}