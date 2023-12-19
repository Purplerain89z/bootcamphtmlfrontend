const pEtanol = 3.52, pGasolina = 2.52, kmViajem = 3254, kmPorLitro = 6;
let tipoComb, gastoMedio;


tipoComb = "etanol";
gastoMedio = kmViajem / kmPorLitro;

if (tipoComb == "Etanol" || tipoComb == "etanol") {
    console.log("O gasto em etanol " + (pEtanol * kmViajem) + ".")
    console.log("O gasto por km é " + ((pEtanol * gastoMedio).toFixed(2)) + ".")
} else {
    console.log("O gasto em gasolina " + (pGasolina * kmViajem) + ".")
    console.log("O gasto por km é " + ((pGasolina * gastoMedio).toFixed(2)) + ".")
}