function soma() {
    
    let numero, inputNumero;
    let pares = [];
    let impares = [];

    while(numeroInvalido(inputNumero)) {
        inputNumero = prompt("Informe um número e informarei os pares e ímpares de até ele ");
        if (numeroInvalido(inputNumero)) {
            alert(`O número informado é invalido, tente novamente`);
        } else {
            numero = parseInt(inputNumero)
            for(let i = 0; i <= numero; i++){
                if(i % 2 === 0){
                    pares.push(i);
                } else {
                    impares.push(i);
                }
            }
        }

        if(pares.length > 0) {
            alert(
                `Segue abaixo a análise feita: 
            
                Foram encontrados ${impares.length} Números ímpares: ${impares} 
                Foram encontrados ${pares.length} Números pares: ${pares} `
            );
        }
    }
}

function numeroInvalido(numero) {
    return isNaN(parseInt(numero)) || numero.includes(".") || parseInt(numero) < -1;
}

soma();
