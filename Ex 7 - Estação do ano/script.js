var dataAtual = new Date();
var diaAtual= dataAtual.getDate();
var mesAtual = dataAtual.getMonth() + 1;
var estacao = '';

if ((diaAtual>= 22 && mesAtual === 3) || mesAtual === 4 || mesAtual === 5 || (diaAtual<= 21 && mesAtual === 6)) {
  estacao = 'Outono';
} else if ((diaAtual>= 22 && mesAtual === 6) || mesAtual === 7 || mesAtual === 8 || (diaAtual<= 21 && mesAtual === 9)) {
  estacao = 'Inverno';
} else if ((diaAtual>= 22 && mesAtual === 9) || mesAtual === 10 || mesAtual === 11 || (diaAtual<= 21 && mesAtual === 12)) {
  estacao = 'Primavera';
} else {
  estacao = 'Verão';
}

alert(`Atualmente no hemisfério sul do planeta a estação climática é: ${estacao}`);