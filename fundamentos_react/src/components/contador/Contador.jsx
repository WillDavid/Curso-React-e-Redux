import React, {Component} from 'react';

class Contador extends Component {
    state = {
        number: this.props.numeroInicial
    };


    incre = () => {
        this.setState({
            number: this.state.number + 1
        })
    }

    render(){
        return (
            <div>
                <h3>Contador</h3>
                <h3>{this.state.number}</h3>
                <button onClick={this.incre}>Contar</button>
            </div>
        )
    }
}

export default Contador