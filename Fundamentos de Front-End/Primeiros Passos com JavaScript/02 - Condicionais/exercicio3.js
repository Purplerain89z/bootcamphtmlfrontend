let peso = 85, altura= 1.85;
const IMC = (peso / Math.pow(altura,2)).toFixed(2);

console.log("Imc para Adultos:");

if (IMC < 18.5){
    console.log("Seu IMC é "+IMC);
    console.log("Abaixo do peso.");
}else if(IMC >= 18.5 && IMC <=25){
    console.log("Seu IMC é "+IMC);
    console.log("IMC sugere que você esta com Peso normal");
}else if(IMC > 24 && IMC <31){
    console.log("Seu IMC é "+IMC);
    console.log("IMC sugere que você esta Acima do peso");
}else if (IMC > 29 && IMC < 41){
    console.log("Seu IMC é "+IMC);
    console.log("IMC sugere que você esta Obeso.")
}else {
    console.log("Seu IMC é "+IMC);
    console.log("IMC sugere que você esta com Obesidade Grave.")
}