function soma() {

    let somaTotal = 0;
    let numero, inputNumero;

    while(parseInt(inputNumero) !=  -1) {
        inputNumero = prompt("Informe alguns números e te retornarei a soma deles ");
        if (parseInt(inputNumero) ==  -1) {
            break;
        }
        if (numeroInvalido(inputNumero)) {
            alert(`O número informado é invalido, tente novamente`);
        } else {
            numero = parseInt(inputNumero);
            somaTotal += numero;
            console.log('soma total: ' + somaTotal)
        }
    }
    
    alert(`A soma dos números digitados é ${somaTotal}`);
    
}

function numeroInvalido(numero) {
    return isNaN(parseInt(numero)) || numero.includes(".") || parseInt(numero) < -1;
}

soma();
