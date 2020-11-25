import React from 'react'

export default function ParOuImpar(props){
    const numberPar = props.number %2 === 0
    return (
        <div>
            { numberPar ?
                <span>Par</span> :
                <span>Impar</span>
            }
            <br/>
            {isParVeri(props.number)}
        </div>
    )

    function isParVeri(isPar){
        if ((isPar%2) === 0) {
            return(
                <span>Par</span>
            )
        }else{
            return(
                <span>Impar</span>
            )
        }
    }
}