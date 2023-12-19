const gato ={
  nome: "Luna",
  idade: 2,  
  descrevar:function(){
    this
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`) //usar de crases
  }
};

// const atributo = "idade";

console.log(gato["nome"])

// gato.descrevar = function(){
//     console.log(`Meu nome é ${this.nome}`);
// }
// // gato.nome = "Ivy"
// // gato.idade = 6

// gato.descrevar();

// // gato.peso = 2.5;
// // delete gato.nome;

// // // console.log(gato.nome);
// // // console.log(gato.idade);
// // console.log(gato);