import React, { Component } from 'react';

class Equipe extends Component {
    render(){
        return(
            <div>
                <Sobre nome={this.props.nome} idade={this.props.idade}></Sobre>
                <hr></hr>
            </div>
        );
    }
}

class Sobre extends Component {
    render(){
        return(
            <div>
                <h2>{this.props.nome}</h2>
                <h2>{this.props.idade}</h2>
            </div>
        )
    }
}
export default function App(){
    return(
        <div>
            <h1>Conheça nossa equipe</h1>
            <Equipe idade={13}nome="Matheus"></Equipe>
            <Equipe idade={56}nome="William"></Equipe>
        </div>
    )
}
