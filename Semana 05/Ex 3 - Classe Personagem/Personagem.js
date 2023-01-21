export default class Personagem {

    constructor(nome) {
        this.nome = nome;
        this.percentualVida = 100;
    }

    sofreuDano(percentualDano) {
      this.percentualVida -= (percentualDano/100*this.percentualVida);
      this.percentualVida < 0 ? 0 : this.percentualVida;
    }

    usouKitMedico() {
      this.percentualVida += 10;
      this.percentualVida > 100 ? 100 : this.percentualVida;
    }
}