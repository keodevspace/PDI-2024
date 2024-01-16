const cliente = {
    nome: 'André',
    idade: 36,
    email: 'andre@email.com',
    telefone: ['99999-9999', '88888-8888'],
};

// adiciona um colchete vazio para criar uma lista

cliente.enderecos = [
    {
    rua: 'Avenida Brasil',
    numero: 320,
    apartamento: true,
    complemento: 'Apto 202',
    bairro: 'Centro',
    cidade: 'Rio de Janeiro',
    },
    {
    rua: 'Cinco de Abril',
    numero: 20,
    apartamento: false,
    complemento: 'Casa',
    bairro: 'Centro',
    cidade: 'São Paulo',
    },
    {
    rua: 'Avenida Paulista',
    numero: 1000,
    apartamento: true,
    complemento: 'Apto 1001',
    bairro: 'Centro',
    cidade: 'São Paulo',
    },
];

console.log(cliente.enderecos[1].cidade); // São Paulo

//agora, posso utilizar os métodos dos arrays nos objetos, já que tenho uma lista
cliente.enderecos.push({
    rua: 'Rua Nova',
    numero: 100,
    apartamento: false,
    complemento: 'Casa',
    bairro: 'Centro',
    cidade: 'Rio de Janeiro',
});

console.log(cliente.enderecos[3].cidade); // Rio de Janeiro

const listaApenasApartamentos = cliente.enderecos.filter((endereco) => endereco.apartamento);

console.log(listaApenasApartamentos);
//     rua: 'Avenida Brasil',
//     numero: 320,
//     apartamento: true,
//     complemento: 'Apto 202',
//     bairro: 'Centro',
//     cidade: 'Rio de Janeiro'
//   },
//   {
//     rua: 'Avenida Paulista',
//     numero: 1000,
//     apartamento: true,
//     complemento: 'Apto 1001',
//     bairro: 'Centro',
//     cidade: 'São Paulo'
//   };

