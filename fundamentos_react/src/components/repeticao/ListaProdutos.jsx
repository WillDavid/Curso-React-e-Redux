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
            <table  style={{textAlign: "center", width: "100%"}}>
                <thead>
                    <tr style={{fontWeight: "bold"}}>
                        <td>ID</td>
                        <td>Produto</td>
                        <td>Preço</td>
                    </tr>
                </thead>
                <tbody>
                    {TabelaProdutos}
                </tbody>

                
            </table>
        </div>
    )
}