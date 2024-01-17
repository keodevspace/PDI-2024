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

function ligandoParaTelefone(telefoneComercial, telefoneResidencial) {
    console.log(`Ligando para ${telefoneComercial} ou ${telefoneResidencial}`);

};

// ligandoParaTelefone(cliente.telefone[0], cliente.telefone[1]);

// espalhamento

ligandoParaTelefone(...cliente.telefone);

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0],
};

console.log(encomenda);

// destinatario: 'André',
//   rua: 'Avenida Brasil',
//   numero: 320,
//   apartamento: true,
//   complemento: 'Apto 202',
//   bairro: 'Centro',
//   cidade: 'Rio de Janeiro'


// spread operator em arrays
// desestruturando arrays

// https://youtu.be/f8a-qwKC5yk


const numerosPares = [2, 4, 6];
const numerosImpares = [1, 3, 5];

const numeros = [...numerosPares, ...numerosImpares];

console.log(numeros);

// [2, 4, 6, 1, 3, 5]

const [primeiroNumero, segundoNumero, ...resto] = [1, 2, 3, 4, 5];

console.log(primeiroNumero, segundoNumero, resto);

// 1 2 [3, 4, 5] posso pegar os dados do resto e colocar em outra variável, por exemplo