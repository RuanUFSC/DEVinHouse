function tabuada() {
    
    let tabuada, numero;
    let inputNumero = "";

    while(numeroInvalido(inputNumero)) {
        inputNumero = prompt("Informe um número e te retornarei a tabuada dele ");

        if (numeroInvalido(inputNumero)) {
            alert(`O número informado é invalido, tente novamente`);
        }
    }

    numero = parseInt(inputNumero);
    tabuada = `A tabuada de ${numero} é: \n`

    for(let i = 1; i <= 10; i++) {
        tabuada += ` ${numero} X ${i} = ${numero * i} \n`
    }

    alert(tabuada);

}

function numeroInvalido(numero) {
    return isNaN(parseInt(numero)) || numero.includes(".") || parseInt(numero) <= 0;
}

tabuada();