function EscreverMeuNome(nome){

    return ("Meu nome é "+ nome);
}

EscreverMeuNome("Almir");

function maiorIdade(idade){
    if (idade > 17){
        console.log(EscreverMeuNome("Almir ")+"Maior de idade");
    }else{
        console.log(EscreverMeuNome("Almir ")+"Menor de idade.");
    }
}

maiorIdade(16);