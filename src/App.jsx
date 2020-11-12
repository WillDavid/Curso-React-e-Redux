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
                <Card title="Desafio Aleatorio">
                    <Aleatorio max={100} min={0}></Aleatorio>
                </Card>

                <Card title="Exemplo Fragmento">
                    <Fragmento></Fragmento>
                </Card>

                <Card title="Nota do aluno">
                    <ComParametro title="Situação do aluno" nomeAluno="Pedro" nota={9.4}></ComParametro>
                </Card>

                <Card title="Hello World">
                    <Primeiro></Primeiro>
                </Card>
            </div>
        </div>
    );
}
