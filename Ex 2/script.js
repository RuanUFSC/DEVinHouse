let categorizaIdade = () => {
    
    let categoria, idade;
    let inputIdade = "";

    while(idadeInvalida(inputIdade)) {
        inputIdade = prompt("Informe a sua idade: ");

        if (idadeInvalida(inputIdade)) {
            alert("A idade digitada foi considerada inválida, tente novamente por favor.");
        }
    }

    idade = parseInt(inputIdade);

    if (idade < 16) {
        categoria = "Jovens";
    } else if (idade > 15 && idade < 65) {
        categoria = "Adultos";
    } else {
        categoria = "Idosos";
    }

    alert(`Sua idade se enquadra na categoria: ${categoria}`);

}

function idadeInvalida(idade) {
    return isNaN(parseInt(idade)) || parseInt(idade) <= 0 || parseInt(idade) > 150;
}

categorizaIdade();