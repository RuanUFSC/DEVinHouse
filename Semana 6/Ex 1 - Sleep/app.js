function sleep ( valor ) {
    
    return new Promise( (res) => {
        setTimeout( () => { res(valor) }, 3000);
    });
}  


sleep('teste')
    .then(function (resultado) {
        console.log(resultado);
    })
    .catch((erro) => console.log(`Erro: ${erro}`))
    .finally(() => {
        console.log('Finalizou');
    });