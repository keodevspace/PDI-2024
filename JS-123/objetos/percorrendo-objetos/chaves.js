// métodos para objetos

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

// acessando todas as chaves que já foram criadas para o cliente

const chavesDoObjeto = Object.keys(cliente);
console.log(chavesDoObjeto); // [ 'nome', 'idade', 'email', 'telefone', 'enderecos' ]

if (!chavesDoObjeto.includes('rg')) { // ! negação, ou seja, se não incluir retorna true
    console.error('ERRO: Chave não existe no objeto cliente'); 
}

// REFERÊNCIA PARA LEITURA: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Working_with_Objects