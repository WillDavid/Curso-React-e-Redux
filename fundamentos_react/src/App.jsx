import React from 'react';
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'

import ListaAlunos from './components/repeticao/ListaAlunos'
import ListaProdutos from './components/repeticao/ListaProdutos'
import ParOuImpar from './components/condicional/ParOuImpar'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import DiretaPai from './components/comunicacao/DiretaPai'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import Input from './components/formulario/Input'
import Contador from './components/contador/Contador'

import './App.css'


export default function App(props) {
    return (
        <div className="app">
            <h1>Fundamentos React</h1>
            <div className="cardsDiv">
                <Card title="Contador" color="#1111">
                    <Contador numeroInicial={10}></Contador>
                </Card>

                <Card title="Input Card" color="red">
                    <Input></Input>
                </Card>

                <Card title="Comunicação Indireta" color="#3333">
                    <IndiretaPai></IndiretaPai>
                </Card>
                <Card title="Comunicação Direta" color="#6598">
                    <DiretaPai></DiretaPai>
                </Card>

                <Card title="Informação Usuario" color="#83443">
                    <UsuarioInfo usuario={{nome: "Fernando"}}></UsuarioInfo>
                    <UsuarioInfo usuario={{email: "ff@gmail.com"}}></UsuarioInfo>
                </Card>

                <Card title="Par ou Impar" color="#8888">
                    <ParOuImpar number={6}></ParOuImpar>
                </Card>

                <Card title="Lista de produtos">
                    <ListaProdutos></ListaProdutos>
                </Card>

                <Card title="Card de Repetição" color="#FA914">
                    <ListaAlunos></ListaAlunos>
                </Card>
                
                <Card title="Card com familias" color="#FA984">
                    <Familia sobrenome="Fernando">
                        <FamiliaMembro nome="Pedro"/>
                       <FamiliaMembro nome="Rogerio"/>
                        <FamiliaMembro nome="João"/>
                    
                        
                    </Familia>
                </Card>

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
