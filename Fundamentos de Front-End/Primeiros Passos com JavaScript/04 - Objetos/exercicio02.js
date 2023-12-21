class Pessoa{
    constructor(nome,peso,altura){
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
    }
    calcularImc(){
        return (this.peso / Math.pow(this.altura,2));
    }
    compararImc(){
        const imc = this.calcularImc();
        if (imc < 18.5){
            return('esta abaixo do peso.')
        }else if (imc >=18.5 && imc <= 25 ){
            return('Peso Normal')
        }else if(imc > 24 && imc <31){
            return("Acima do peso");
        }else if (imc > 29 && imc < 41){
            return("Esta Obeso.")
        }else {
            return("Obesidade Grave.")
        }
    }
}
const jose = new Pessoa ('José', 70, 1.75);
const paulo = new Pessoa ('Paulo',99,1.55);
const almir = new Pessoa ('Almir',100, 1.85);

console.log(jose.calcularImc().toFixed(2));

console.log(`Seu nome é ${jose.nome}\nSeu peso é ${jose.peso}\nSua altura é ${jose.altura}\nSeu Imc é ${jose.calcularImc().toFixed(2)}\nvocê esta ${jose.compararImc()}\n`)
console.log(`Seu nome é ${paulo.nome}\nSeu peso é ${paulo.peso}\nSua altura é ${paulo.altura}\nSeu Imc é ${paulo.calcularImc().toFixed(2)}\nvocês esta ${paulo.compararImc()}\n`)
console.log(`Seu nome é ${almir.nome}\nSeu peso é ${almir.peso}\nSua altura é ${almir.altura}\nSeu Imc é ${almir.calcularImc().toFixed(2)}\nvocê esta ${almir.compararImc()}\n`)

console.log(jose);
console.log(paulo);
console.log(almir);