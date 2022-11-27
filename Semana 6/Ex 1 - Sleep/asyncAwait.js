const buscarValorAprovado = new Promise((res) =>
 setTimeout(() => res(Math.floor(Math.random() * 9000) + 10000), 2000)
);

async function verificaEmprestimo(valor) {
    try { const valorPromise = await buscarValorAprovado;
        if(valor >  valorPromise) {
            console.log(`Empréstimo reprovado, pois o valor R$${valor} está acima do limite de R$${valorPromise}`)
        } else {
            console.log(`Empréstimo aprovado, pois o valor R$${valor} está dentro do limite de R$${valorPromise}`)
        } 
    } catch (error) {
        console.log('Erro: ', error)
    } finally {
        console.log('Finalmente o fim')
    }
}

verificaEmprestimo(15000);

