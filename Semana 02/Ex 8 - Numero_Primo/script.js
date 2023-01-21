var primos = [];

for (let n = 2; n <= 1000; n++) {
  var primo = true;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      primo = false;
    }
  }

  if (primo) {
    primos.push(n);
  }
}

console.log(`Existem: ${primos.length} números primos entre 0 e 1000, são eles: 
  ${primos}`);