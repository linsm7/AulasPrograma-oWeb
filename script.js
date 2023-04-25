// const videogame = {
//     marca: 'Playstation',
//     ano: 2020
// }

// const jogo ={
//     marca: 'FIFA',
//     ano: 2013,

//     mostrarDados(){
//         console.log(`A marca é ${this.marca} e o ano é ${this.ano}`)
//     }
// }
// jogo.mostrarDados()
// jogo.mostrarDados.call(videogame)

// Pergunta 1:

function hello (name, lastName){
    console.log(`Olá ${name} ${lastName}, seja bem vindo!`);
}
hello('Matheus', 'Lins');

// Pergunta 2:

hello = (name, lastName) => console.log(`Olá ${name} ${lastName}, seja bem vindo!`);
hello('Matheus', 'Lins');

//Pergunta 3:

function descobreIdade(nameUser, mesNascimento, anoNascimento){
    let idade;
    if(mesNascimento < 4){
        idade = (2023 - anoNascimento);
    }else{
        idade = (2022 - anoNascimento);
    }
    console.log(`Olá ${nameUser}, sua idade é ${idade} anos.`);
}
descobreIdade('Matheus', 1, 2004);

//Pergunta 4:

const cliente = {
    cpf:'09079828165', 
    nome:'matheus lins', 
    telefone:'61982613561', 
    email:'lins@gmail.com', 
    dataNascimento: '24/06/2004', 
    clienteDesde: '2015'
}

const funcionario = {
    cpf:'44456734212', 
    nome:'afonso', 
    telefone:'61987653433', 
    email:'afonso@gmail.com', 
    dataNascimento:'20/05/1980', 
    registro:'saudhasudhu', 
    carteiraTrabalho:'31314', 
    pis:'ee1313',

    mostrarDados(){
        console.log(`Seus dados são: ${this.cpf}, ${this.nome}, ${this.telefone}, ${this.email}, ${this.dataNascimento}, ${this.registro}, ${this.carteiraTrabalho}, ${this.pis}`);
    },
    alterarDados(cpf, nome){
        this.cpf = cpf;
        this.nome = nome;
       
    }
}
funcionario.alterarDados.call(cliente,'45676940323', "luis");
funcionario.mostrarDados.call(cliente);
