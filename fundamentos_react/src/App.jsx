import React from 'react';
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'

import './App.css'


export default function App(props) {
    return (
        <div className="app">
            <h1>Fundamentos React</h1>
            <div className="cardsDiv">
                <Card title="Desafio Aleatorio" color="#FA6900">
                    <Aleatorio max={100} min={0}></Aleatorio>
                </Card>

                <Card title="Exemplo Fragmento" color="#E94C6F">
                    <Fragmento></Fragmento>
                </Card>

                <Card title="Nota do aluno" color="#E8B71A">
                    <ComParametro title="Situação do aluno" nomeAluno="Pedro" nota={9.4}></ComParametro>
                </Card>

                <Card title="Hello World" color="#588c73">
                    <Primeiro></Primeiro>
                </Card>
            </div>
        </div>
    );
}
