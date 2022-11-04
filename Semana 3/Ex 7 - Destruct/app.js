const pessoa = {
    nome: 'Ada',
    idade: 36,
    profissao: 'matemática'
};

const montaMensagem =  ({ nome, idade, profissao }) => {
    return `Esta é ${nome}, tem ${idade} anos e é ${profissao}.`;
}

const mensagem = montaMensagem(pessoa);

console.log(mensagem);