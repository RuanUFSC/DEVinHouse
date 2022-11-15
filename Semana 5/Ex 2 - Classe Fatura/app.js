import Fatura from './Fatura.js'

const melao = new Fatura(123, "Melão", 2, 3);
const mamao = new Fatura(124, "Mamao", 5, 32);
const valor = melao.obterValorTotal();

console.log(valor);
console.log(mamao.valorTotal);