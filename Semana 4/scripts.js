const form = document.getElementById('form');
let accounts = [];

const passwordValidator = (evento) => {
  if (evento.target.senha.value === evento.target.confirmacao.value) return true;
  else return false;
};

const accountRegister = (evento) => {
  evento.preventDefault();

  if (passwordValidator(evento)) {
    const conta = {
      nome: evento.target.nome.value,
      cpf: evento.target.cpf.value,
      celular: evento.target.celular.value,
      senha: evento.target.senha.value,
      conta: Math.floor(1000 + Math.random() * 90000),
      saldo: 0,
    };

    accounts.push(conta);
    alert(`Conta criada com sucesso! Número: ${conta.conta}`);
  } else {
    alert('As senhas devem ser iguais');
  }
};

form.addEventListener('submit', accountRegister);