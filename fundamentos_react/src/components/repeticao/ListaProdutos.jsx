import React from 'react'
import '../../data/produtos'
import produtos from '../../data/produtos'

export default function ListaProdutos(props){
    const TabelaProdutos = produtos.map((produto) => {
        return (
            <tr key={produto.idProduct}>
                <td>{produto.idProduct}</td>
                <td>{produto.nameProduct}</td>
                <td>{"R$ " + produto.price.toFixed(2)}</td>
            </tr>
        )
    })
    return (
        <div>
            <table  style={{textAlign: "left"}}>
                {TabelaProdutos}
            </table>
        </div>
    )
}