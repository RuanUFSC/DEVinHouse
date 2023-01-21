const retornoEmpresa1 = new Promise( (resolve, reject) => 
setTimeout(resolve, 500, "Empresa 1") ); // 5 segundos
const retornoEmpresa2 = new Promise( (resolve, reject) => 
setTimeout(resolve, 300, "Empresa 2") ); // 3 segundos

Promise.race([retornoEmpresa1, retornoEmpresa2])
 .then((valores) => console.log(valores))
 .catch((err) => console.log(err));