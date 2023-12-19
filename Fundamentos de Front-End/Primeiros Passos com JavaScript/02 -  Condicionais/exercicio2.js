let nota1=6, nota2=7, nota3=8;
const media = ((nota1 + nota2+nota3)/3);

if (media < 5){
    console.log("Sua media é "+media);
    console.log("Status Reprovado.");
}else if(media > 4 || media <8){
    console.log("Sua media é "+media);
    console.log("Status Recuperação");
}else{
    console.log("Sua media é "+media);
    console.log("Status Aprovado.");
}