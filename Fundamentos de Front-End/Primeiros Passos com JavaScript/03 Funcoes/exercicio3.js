function calcularPreco(pagamento,valor){
    if (pagamento === 1){
        return valor = valor - ((valor / 100)*10);
    }else if(pagamento === 2){
        return valor = valor - ((valor/100)*15)
    }else if (pagamento === 3){
        return valor
    }else{
        return valor = valor + ((valor/100)*10)
    }
}

function main(){
    console.log(calcularPreco(2, 1520));
}
main();