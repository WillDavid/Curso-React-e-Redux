import React, {Component} from 'react';

export default class App extends Component{

    constructor(props){
        super(props);

        this.state = {
            nome: "Matheus",
            contador: 0
        };

        this.aumentar = this.aumentar.bind(this)

        this.diminuir = this.diminuir.bind(this)
    }

    aumentar(){
        let state = this.state;
        state.contador += 1;
        this.setState(state)
    }

    diminuir(){
        let state = this.state;
        state.contador -= 1;
        this.setState(state)
    }
    render(){
        return(
            <div>
                
                <h3>{this.state.contador}</h3>
                <button onClick={this.diminuir}>-</button>
                <button onClick={this.aumentar}>+</button>

            </div>
        )
    }
}