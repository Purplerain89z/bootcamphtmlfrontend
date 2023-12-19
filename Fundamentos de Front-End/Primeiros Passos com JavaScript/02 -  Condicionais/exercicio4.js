let preco = 1584;

const formaPagamento = 4;

if (formaPagamento === 1){
    preco = preco -  ((preco/100) * 10);
}else if(formaPagamento === 2){
    preco = preco - ((preco/100) *15);
}else if (formaPagamento === 3){
    preco;
}else {
    preco = preco +((preco/100)*10);
}

console.log("Volor total a pagar é "+preco+".");