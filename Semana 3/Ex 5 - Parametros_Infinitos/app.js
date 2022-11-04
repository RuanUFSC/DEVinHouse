const somaTudo = (...numeros) => {
    return numeros.reduce((acumulador, num) => {
        return acumulador + num;
    }, 0)
}

const resultado = somaTudo(1, 2, 3, 4);

console.log(resultado);