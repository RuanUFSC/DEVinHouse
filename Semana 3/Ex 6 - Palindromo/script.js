const verificaPalindromo = (palavra) => {
    if (typeof palavra !== 'string') {
        console.log('Digite somente palavras, por favor!');
        return false;
      }
      return [...palavra].reverse().join('') === palavra;
}

const teste1 = verificaPalindromo("ana");
const teste2 = verificaPalindromo("julia");

console.log(teste1);
console.log(teste2);