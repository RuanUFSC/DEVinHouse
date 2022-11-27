const sucesso = false;

new Promise((resolve, reject) => {
 if (sucesso) {
   resolve('Deu bom!');
 }
 reject('Deu ruim!');
})
 .then((value) => console.log(value))
 .catch((err) => console.log(err));

const p = new Promise((resolve, reject) => {
 if (sucesso) {
   resolve('Deu bom!');
 }
 reject('Deu ruim!');
});
p.then((value) => console.log(value))
    .catch((err) => console.log(err));

new Promise((resolve, reject) => {
    setTimeout(() => resolve(10), 3000);
   })
    .then((num) => {
      console.log('primeiro then: ', num);
      return num * 2; //10
    })
    .then((num) => {
      console.log('segundo then: ', num);
      return num * 2; //20
    })
    .then((num) => {
      console.log('último then: ', num); //40
    });
   
new Promise((resolve, reject) => resolve(true))
    .then((data) => console.log('sucesso', data))
    .catch((error) => console.log('falha', error))
    .finally(() => console.log('sucesso ou falha (final)'));