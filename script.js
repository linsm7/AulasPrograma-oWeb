const enviar = document.querySelector('#enter');

enviar.addEventListener("click", function(a){

    const txnome = document.querySelector("#txnome");
    const nome = txnome.value

    console.log(`Nome: ${nome}`)

});

enviar.addEventListener("click", function(b){
    const txemail = document.querySelector("#txemail");
    const email = txemail.value

    console.log(`Email: ${email}`)
});

enviar.addEventListener("click", function(c){
    const txtelefone = document.querySelector("#txtelefone");
    const telefone = txtelefone.value

    console.log(`Telefone: ${telefone}`)
});

enviar.addEventListener("click", function(d){
    const txendereco = document.querySelector("#txendereco");
    const endereco = txendereco.value

    console.log(`Endereço: ${endereco}`)
});
