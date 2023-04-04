// function pessoa (nome, idade) {
//     this.nome = nome;
//     this.idade = idade;
//     return console.log(`Ola ${nome}, sua idade é de ${idade} anos. \n Seja bem-vindo!`);
// }

// let nome = prompt("Digite seu nome");
// let idade = prompt("Digite sua idade");

// console.log(pessoa(nome,idade));



function parImpar (numero){
    numero = prompt("Digite um número:");

    if (numero % 2 == 0){
        console.log("É par!");
    }else{
        console.log("é impar!");
    }
}
console.log(parImpar());
