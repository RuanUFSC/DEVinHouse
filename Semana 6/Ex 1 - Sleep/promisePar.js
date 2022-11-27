conta(66);

function conta (numero) {
    
    return new Promise( () => {
        setTimeout( () => { verificaPar(numero)} , 2000)
    })
}

function verificaPar(numero) {
    if(numero % 2 == 0) {
        console.log(`${numero} é par`)
    } else {
        console.log(`${numero} é ímpar`)
    }
}