let peso = 85, altura= 185;
const IMC = peso / (altura/altura);

console.log("Imc para Adultos:");

if (IMC < 18.5){
    console.log("Seu peso é "+IMC);
    console.log("Abaixo do peso.");
}else if(IMC >= 18.5 || IMC <=25){
    console.log("Seu peso é "+IMC);
    console.log("IMC sugere que você esta com Peso normal");
}else if(IMC > 24 || IMC <31){
    console.log("Seu peso é "+IMC);
    console.log("IMC sugere que você esta Acima do peso");
}else if (IMC > 29 || IMC < 41){
    console.log("Seu peso é "+IMC);
    console.log("IMC sugere que você esta Obeso.")
}else {
    console.log("Seu peso é "+IMC);
    console.log("IMC sugere que você esta com Obesidade Grave.")
}