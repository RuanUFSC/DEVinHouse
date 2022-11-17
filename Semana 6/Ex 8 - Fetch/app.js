const usuarios = document.getElementById('usuarios');

const montaTexto = (tipo, texto) => {
  const elemento = document.createElement(tipo);
  elemento.innerText = texto;
  return elemento;
};

async function getUsers() {
  try {
    const retorno = await fetch(`https://randomuser.me/api/?results=10`);
    const retornoJson = await retorno.json();

    console.log(retornoJson.results);
    usuarios.innerHTML = '';

    retornoJson.results.forEach((user) => {
      const divContainer = document.createElement('div');
      const divDados = document.createElement('div');
      const lista = document.createElement('li');

      divContainer.classList.add('divContainer');
      divDados.classList.add('divDados');

      const endereco = montaTexto(
        'p',
        `${user.location.street.name}, ${user.location.street.number}, ${user.location.city} / ${user.location.state}, ${user.location.country}`
      );
      const nome = montaTexto(
        'h1',
        `${user.name.title} ${user.name.first} ${user.name.last}`
      );
      const email = montaTexto('h2', user.email);
      const foto = document.createElement('img');
      foto.src = user.picture.large;

      divDados.appendChild(nome);
      divDados.appendChild(email);
      divDados.appendChild(endereco);     
      divContainer.appendChild(foto);
      divContainer.appendChild(divDados);
      lista.appendChild(divContainer);
      usuarios.appendChild(lista);
    });
  } catch (error) {
    console.error(error);
  }
}

getUsers();