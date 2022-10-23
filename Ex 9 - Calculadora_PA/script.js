let calculadora = () => {

    let valorInicial = "";
    let raiz = "";

    while(numeroInvalido(valorInicial)){
        valorInicial = prompt("Digite um valor inicial:").replace(",", ".");

        if(numeroInvalido(valorInicial)){
            alert("Valor inicial inválido.")
        }
    }
54
    valorInicial = Number(valorInicial);

    while(numeroInvalido(raiz)){
      raiz = prompt("Digite um valor para ser a raiz da PA: ").replace(",", ".");

        if(numeroInvalido(raiz)){
            alert("Raiz inválida.")
        }
    }

    raiz = Number(raiz);

    let conjunto = [valorInicial]

    for(let i = 1; i < 10; i++){
    conjunto.push(conjunto[i - 1] + raiz);
    }

    alert(`Os 10 primeiros valores da sequência são: 

    ${conjunto}`)  


    function numeroInvalido(numero) {
      return isNaN(parseFloat(numero)) || isNaN(numero);
    } 

}

calculadora();