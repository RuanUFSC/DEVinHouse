const uneDobraRetorna= (n, ...numeros) => {
    const numerosDobrados = numeros.map(numero => numero * 2);
    return [...n, ...numerosDobrados];
}

const r1 = uneDobraRetorna([1, 2, 3], 4, 4);
const r2 = uneDobraRetorna([2], 10, 4, 8); 
const r3 = uneDobraRetorna([6, 8]); 

console.log(r1);
console.log(r2); 
console.log(r3); 