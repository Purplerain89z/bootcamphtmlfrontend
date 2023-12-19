class pessoa {
  nome;
  idade;
  anoDeNascimento;

  constructor(nome,idade) {
    this.nome = nome;
    this.idade = idade;
    this.anoDeNascimento = 2023 - idade;
  }
  descrever() {
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
  }
}

const vitor = new pessoa('vitor', 25);
const renan = new pessoa('renan', 30);

vitor.descrever();
renan.descrever();

console.log(vitor)

// class pessoa{
//   nome;
//   idade;

// descrever(){
//   console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
//   }
// }
// const vitor = new pessoa();

// vitor.nome = 'vitor J Paulo';
// vitor.idade = 25;

// const renan = new pessoa();
// renan.nome = 'renan s silva';
// renan.idade = 19;

// console.log(vitor);
// console.log(renan);

// vitor.descrever();
// renan.descrever();

// // const gato ={
// //   nome: "Luna",
// //   idade: 2,
// //   descrevar:function(){
// //     this
// //     console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`) //usar de crases
// //   }
// // };

// // // const atributo = "idade";

// // console.log(gato["nome"])

// // // gato.descrevar = function(){
// // //     console.log(`Meu nome é ${this.nome}`);
// // // }
// // // // gato.nome = "Ivy"
// // // // gato.idade = 6

// // // gato.descrevar();

// // // // gato.peso = 2.5;
// // // // delete gato.nome;

// // // // // console.log(gato.nome);
// // // // // console.log(gato.idade);
// // // // console.log(gato);