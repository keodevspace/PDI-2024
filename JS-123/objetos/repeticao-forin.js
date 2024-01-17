const cliente = {
    nome: 'André',
    idade: 36,
    email: 'andre@email.com',
    telefone: ['99999-9999', '88888-8888'],
};

cliente.enderecos = [
    {
    rua: 'Avenida Brasil',
    numero: 320,
    apartamento: true,
    complemento: 'Apto 202',
    bairro: 'Centro',
    cidade: 'Rio de Janeiro',
    },   
];

for (let chave in cliente) { //acessando a chave
    console.log(chave); //nome, idade, email, telefone, enderecos
}

for (let chave in cliente) { // acessando o valor
    console.log(cliente[chave]); //André, 36, email, telefone, enderecos
}

for (let chave in cliente) { // função dentro do objeto
    let tipo = typeof cliente[chave];
    if (tipo === 'object' && tipo != 'function') {
        console.log('A chave ' + chave + ' tem o valor ' + cliente.chave); 
    }
    
}