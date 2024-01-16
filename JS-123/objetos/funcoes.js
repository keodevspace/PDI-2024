// guardando funcoes dentro de objetos

const cliente = {
    nome: 'André',
    idade: 36,
    email: 'andre@email.com',
    telefone: ['99999-9999', '88888-8888'],
    saldo: 200,
    efetuaPagamento: function (valorDaCompra) {
        if (valordaCompra > this.saldo) {  // this é a instância do objeto atual, ou seja, cliente
            return 'Saldo insuficiente';        
        } 
        else {
            this.saldo -= valorDaCompra;
            return 'Pagamento efetuado com sucesso. Novo saldo:' + this.saldo;
        }
    }
};

cliente.efetuaPagamento(250); // Saldo insuficiente
cliente.efetuaPagamento(20); // Pagamento efetuado com sucesso. Novo saldo: 180