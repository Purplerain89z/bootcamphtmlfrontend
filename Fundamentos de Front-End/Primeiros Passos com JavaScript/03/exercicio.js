function calculoImc(peso,altura){
    return (peso / Math.pow(altura,2)).toFixed(2);
}
function classificarImc(IMC){
    if (IMC < 18.5){
        return("Seu IMC é "+IMC+". IMC sugere que você abaixo do peso. ");
    }else if(IMC >= 18.5 && IMC <=25){
        return("Seu IMC é "+IMC+". IMC sugere que você esta com Peso normal.");
    }else if(IMC > 24 && IMC <31){
        return("Seu IMC é "+IMC+". IMC sugere que você esta Acima do peso.");
    }else if (IMC > 29 && IMC < 41){
        return("Seu IMC é "+IMC+". IMC sugere que você esta Obeso.");
    }else {
        return("Seu IMC é "+IMC+". IMC sugere que você esta com Obesidade Grave.");
    }
}
function main(){
const peso = 85, altura = 1.85;
const IMC = calculoImc(peso,altura);
console.log(classificarImc(IMC));
}

main();
