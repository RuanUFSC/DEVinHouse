const inputName = document.getElementById('name');
const button = document.getElementById('button');
const paragrafo = document.getElementById('paragrafo');

const mensagemOla = (inputName) => {
  return `Olá, ${inputName}`;
};

button.addEventListener('click', () => {
  const messageName = inputName.value;
  const message = mensagemOla(messageName);
  paragrafo.innerHTML = message;
});