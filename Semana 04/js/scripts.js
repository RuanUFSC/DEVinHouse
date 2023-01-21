const form = document.getElementById('form');
const formDeposito = document.getElementById('form-deposito');
const formSaque = document.getElementById('form-saque');
const formSaldo = document.getElementById('form-saldo');
var operacao;

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

const obterConta = (conta) => {
  const contaCliente = accounts.find((c) => c.conta === conta);

  return contaCliente;
};

const sacar = (conta, valor) => {
  if (validarValor(valor)) {
    if (validarSaldo(conta, valor)) {
      let saldoAtual;
      const contasAtualizadas = accounts.map((c) => {
        if (c.conta === conta) {
          saldoAtual = c.saldo - valor;
          return { ...c, saldo: saldoAtual };
        }
        return c;
      });

      accounts = contasAtualizadas;

      alert(`Saque efetuado com sucesso! Saldo atual: ${saldoAtual}`);
    } else {
      alert('Saldo insuficiente');
    }
  } else {
    alert('Valor inválido');
  }
};

const depositar = (conta, valor) => {
  if (validarValor(valor)) {
    // const contaCliente = obterConta(conta);
    // contaCliente.saldo += valor;

    const contaCliente = { ...obterConta(conta) };
    contaCliente.saldo += valor;

    const contasAtualizadas = accounts.filter((c) => c.conta !== conta);
    contasAtualizadas.push(contaCliente);
    accounts = contasAtualizadas;

    alert(`Deposito efetuado com sucesso! Saldo atual: ${contaCliente.saldo}`);
  } else {
    alert('Valor inválido');
  }
};

const consultarSaldo = (conta) => {
  const contaCliente = obterConta(conta);

  alert(`Saldo atual: ${contaCliente.saldo}`);
};

const validarConta = (conta, senha) => {
  const contaCliente = obterConta(conta);

  return contaCliente && contaCliente.senha === senha ? true : false;
};

const validarValor = (valor) => {
  return !isNaN(valor) && valor > 0;
};

const validarSaldo = (conta, valor) => {
  const contaCliente = obterConta(conta);

  return contaCliente.saldo >= valor;
};

const efetuarOperacao = (evento, operacao) => {
  evento.preventDefault();

  const conta = parseInt(evento.target.conta?.value);
  const senha = evento.target.senha?.value;
  const valor = parseInt(evento.target.valor?.value);
  console.log('operacao: ', operacao);
  
  if (operacao == 'saque' || operacao == 'saldo') {var contaValida = validarConta(conta, senha)}
  else {var contaValida = true};

  if (contaValida) {
    switch (operacao) {
      case 'saque':
        sacar(conta, valor);
        break;
      case 'deposito':
        depositar(conta, valor);
        break;
      case 'saldo':
        consultarSaldo(conta);
        break;
      default:
        alert('Operação inválida');
    }
  } else {
    alert('Conta ou senha inválida');
  }
};

formDeposito.addEventListener('submit', function(event){efetuarOperacao(event, 'deposito')});
formSaldo.addEventListener('submit', function(event){efetuarOperacao(event, 'saldo')});
formSaque.addEventListener('submit', function(event){efetuarOperacao(event, 'saque')});