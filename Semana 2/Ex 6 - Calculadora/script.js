function calculadora() {
    
    let operacoes = ['+', '-', '*', '/'];
    let operacao, numero1, numero2, resultado;

    while(operacaoInvalida(operacao)) {
        operacao = prompt("Qual o tipo de cálculo você deseja fazer? (“+”, “-”, “*” ou “/”)");
        
        if(operacaoInvalida(operacao)){
            alert("Operação inválida.")
        } else {
            numero1 = prompt("Qual é o primeiro valor que deseja calcular?").replace(",", ".")
            if(numeroInvalido(numero1)){
                alert("Número inválido")
            } else {
                numero2 = prompt("Qual é o segundo valor que deseja calcular?").replace(",", ".")
                if(numeroInvalido(numero2)){
                    alert("Número inválido")
                } else {
                    calcula(operacao, numero1, numero2)
                }
            }
        }
    }

    alert(`${numero1} ${operacao} ${numero2} = ${resultado}`)

    function calcula(operacao, numero1, numero2){
        switch(operacao){
            case '+':
                resultado = numero1 + numero2;
            break
        
            case '-':
                resultado = numero1 - numero2;    
            break
        
            case '*':
                resultado = numero1 * numero2;    
            break
        
            case '/':
                resultado = numero1 / numero2;    
            break
        }
    }

    function numeroInvalido(numero) {
        return isNaN(parseFloat(numero)) || isNaN(numero);
    }
    
    function operacaoInvalida(operacao) {
        return !operacoes.includes(operacao);
    } 
}



calculadora();
