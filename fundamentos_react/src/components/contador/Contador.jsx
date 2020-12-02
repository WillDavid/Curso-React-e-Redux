import React, {Component} from 'react';

import Display from './Display'
import Botoes from './Botoes'
import PassoForm from './PassoForm';

class Contador extends Component {
    state = {
        number: this.props.numeroInicial || 0,
        passo: this.props.passoInicial,
    };


    incre = () => {
        this.setState({
            number: this.state.number + this.state.passo,
        })
    }

    decre = () => {
        this.setState({
            number: this.state.number - this.state.passo,
        })
    }

    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso,
        })
    }

    render(){
        return (
            <div>
                <h3>Contador</h3>
                <Display number={this.state.number}></Display>
                <PassoForm passo={this.state.passo} setPasso={this.setPasso}></PassoForm>
                <Botoes incrementar={this.incre} decrementar={this.decre}></Botoes>
            </div>
        )
    }
}

export default Contador