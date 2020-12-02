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
console.log(gerarNumeros(7))