const numeros1 = [56, 65, 64, -3, 23, 42, -15, 65, 14, 32, 78, 70, 47];
const numeros2 = [];
const numeros3 = [1];
const numeros4 = [1, -1];
const numeros5 = null;
const numeros6 = [-2,-2,-2,-2];
const numeros7 = [20,10, 30];

let procuraMinMax = (numeros) => {
    let maior, menor;
    if (!numeros){
        console.log("Não é possível encontrar \n")
    } else if(numeros.length < 1) {
        console.log("Não é possível encontrar \n")
    }
    else {
        if (numeros.length == 1){
            maior = numeros[0];
            menor = numeros[0];
        } else {
            for (var i = 0; i < numeros.length; i++) {
                if(maior == undefined) {
                    maior = numeros[i];
                } else if (numeros[i] < menor || menor == undefined) {
                    menor = numeros[i];
                } else if (numeros[i] > maior) {
                    maior = numeros[i];
                } 
            }    
        }

        console.log(`O maior valor é ${maior} e o menor valor é ${menor} \n`);
        
    }
}

procuraMinMax(numeros1);
procuraMinMax(numeros2);
procuraMinMax(numeros3);
procuraMinMax(numeros4);
procuraMinMax(numeros5);
procuraMinMax(numeros6);
procuraMinMax(numeros7);