const num = [ 10,11,12,13,14,15,16,17,18,19,20];

for (let i=0; i < num.length;i++){
    if (num[i] % 2 == 0){
        console.log(`o Numero ${num[i]} é par.`);
    }else {
        console.log(`O Numero ${num[i]} é impar.`);
    }
}