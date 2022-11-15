import Usuario from "./Usuario.js";

const botao = document.getElementById("button")
const usuario = document.getElementById("usuario")
const senha = document.getElementById("senha")
const mensagem = document.getElementById('mensagem')

const user = new Usuario("ruan", "ruan@gmail.com", "ruan123")

botao.addEventListener("click", () => {
    let usuarioAtual = usuario.value;
    let senhaAtual = senha.value;
    user.autenticar(usuarioAtual, senhaAtual) ? 
    mensagem.innerHTML = "Login realizado" :
    mensagem.innerHTML = "Falha no login"
})