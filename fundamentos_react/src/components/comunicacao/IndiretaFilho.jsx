import React from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    const min = 0
    const max = 100
    const gerarIdade = function IdadeAleatoria(){
        return (
            parseInt(Math.random() * (max-min))
        )
    }
    return(
        <div>
            <div>
                Filho
            </div>
            <button onClick={function(e){
                props.quandoClicar('João', gerarIdade(), true)
            }}>Fornecer Informações</button>
        </div>
    )
}