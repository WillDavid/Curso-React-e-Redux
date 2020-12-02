import React, {useState} from 'react'

export default function Mega(props){

    function busca(lista, x){
        for(let i=0;i<lista.length;i++){
            if(x === lista[i]){
                return true
            }
        }
    }
    
    function gerarNumeros(qtde){
        const lista = [];
        for(let i=0; i<qtde; i++){
            const x =  Math.ceil(Math.random() * (60 - 1) + 0)
            if(busca(lista, x)){
                i = i - 1;
            }else{
                lista[i] = x;
            }  
        }
        return lista    
    }
    const [qtde, setQtde] = useState(props.qtde) 
    const numerosIniciais = Array(qtde).fill(0)
    const [lista, setLista] = useState(numerosIniciais)

    return(
        <div>
            <h2>Mega</h2>
            <div>
                <label>Quantidade de Numeros: </label>
                <input type="number" value={qtde} onChange={e => setQtde(+e.target.value)}/>
            </div>
            <h3>{lista.join(' ')}</h3>
            <button onClick={_ => setLista(gerarNumeros(qtde))}>Gerar Números</button>
        </div>
    )
}