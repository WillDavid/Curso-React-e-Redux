import React from 'react'
import DiretaFilho from './DiretaFilho'

export default function DiretaPai(props){
    return (
        <div>
            <DiretaFilho text="Jorge" number={4} bool={true}></DiretaFilho>
            <DiretaFilho text="Ricardo" number={10} bool={false}></DiretaFilho>
            <DiretaFilho text="Maria" number={4} bool={true}></DiretaFilho>
        </div>
    )
}