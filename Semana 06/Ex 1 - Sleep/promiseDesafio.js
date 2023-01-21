const temEmprestimoDisponivel = new Promise((resolve, reject) => {
    if(Math.random() < 0.5) {
        setTimeout(resolve, 5000, 'Empréstimo disponivel')
    }
    setTimeout(reject, 5000, 'Sem empréstimo disponivel')
});

const temCreditoDisponivel  = new Promise((resolve, reject) => {
    if(Math.random() < 0.5) {
        setTimeout(resolve, 3000, 'Crédito disponivel')
    }
    setTimeout(reject, 3000, 'Sem crédito disponivel')
});

const cadastrarCliente  = new Promise((resolve) => {
    setTimeout(resolve, 4000, 'Cliente cadastrado com sucesso')
    }
);

Promise.allSettled([temEmprestimoDisponivel, temCreditoDisponivel])
.then(resultado => {
    cadastrarCliente.then(cliente => {
        console.log(cliente);
        console.log(resultado);
    })
    }
);