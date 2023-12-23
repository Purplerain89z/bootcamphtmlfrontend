const {gets, print} = require('./funcoes-auxiliares');


/*
Uma sala contem 5 anulos e para cada aluno e para cada aluno foi sorteado um número de 1 - 100.
faça um programada que receba os 5 números sorteados para os alunos e mostre o maior numero dorteado.

Dados de entrada:
5
50
10
98
23

saida:
98
*/


const numerosSorteados = [];

for (let i=0;i<5;i++){
    const numeroSorteado =gets();
    numerosSorteados.push(numeroSorteado);
}

let maiorValor = -1;

for (let i=0; i< numerosSorteados.length;i++){
    const numeroSorteado =  numerosSorteados[i];
    if (numeroSorteado > maiorValor){
        maiorValor = numeroSorteado;
    }
}

print(maiorValor);
