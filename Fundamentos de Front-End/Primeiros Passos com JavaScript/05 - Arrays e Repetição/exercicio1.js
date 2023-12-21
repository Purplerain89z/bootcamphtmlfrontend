const notas = [];

notas.push(8);
notas.push(3);
notas.push(4);
notas.push(10);
notas.push(5);
notas.push(3);
notas.push(7);
notas.push(2);

let soma=0;

for (let i =0; i< notas.length;i++){
    soma = soma + notas[i];
}
console.log("A media da nota é "+soma / notas.length);