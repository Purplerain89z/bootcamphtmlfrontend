class Car{
    constructor (marca,cor,gastoPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoPorKm = gastoPorKm;
    }
    calcularGasto(distancia, gastoPorKm){
        return distancia * this.gastoPorKm * gastoPorKm
    }
}

const uno = new Car('fiat','prata',(1/12));
console.log(uno);

console.log(uno.calcularGasto(70,5).toFixed(2));

const palio = new Car ('fiat','preto',(1/10).toFixed(2));
console.log(palio);

console.log(palio.calcularGasto(70,5))