var p1 = new Promise((resolve, reject) => setTimeout(() => resolve('sucesso 1!'), 150));
var p2 = new Promise((resolve, reject) => setTimeout(() => resolve('sucesso 2!'), 200));
var p3 = new Promise((resolve, reject) => setTimeout(() => reject('erro 1!'), 100));

Promise.allSettled([p1, p2, p3]).then((valores) => console.log(valores));