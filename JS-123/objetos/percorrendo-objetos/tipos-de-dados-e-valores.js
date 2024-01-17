// tipos

// const cliente = {
//     nome: 'André',
//     idade: 36,
//     email: 'andre@email.com',
//     telefone: ['99999-9999', '88888-8888'],
// };

// console.log(cliente);
// console.log(cliente.nome);
// {
//   nome: 'André',
//   idade: 36,
//   email: 'andre@email.com',
//   telefone: [ '99999-9999', '88888-8888' ]
// }
// André


// um objeto dentro de outro objeto (aninhados; blocos)

const cliente = {
    nome: 'André',
    idade: 36,
    email: 'andre@email.com',
    telefone: ['99999-9999', '88888-8888'],
};

cliente.endereco = {
    rua: 'Avenida Brasil',
    numero: 320,
    apartamento: true,
    complemento: 'Apto 202',
    bairro: 'Centro',
    cidade: 'Rio de Janeiro',
}

console.log(cliente);
// {
//     nome: 'André',
//     idade: 36,
//     email: 'andre@email.com',
//     telefone: [ '99999-9999', '88888-8888' ],
//     endereco: {
//       rua: 'Avenida Brasil',
//       numero: 320,
//       apartamento: true,
//       complemento: 'Apto 202',
//       bairro: 'Centro',
//       cidade: 'Rio de Janeiro'
//     }
//   }



