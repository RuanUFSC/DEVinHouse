import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-10';
  password: String = "";
  itens = ['Comprar Pão', 'Comprar Salsicha', 'Comprar Ketchup']; 
  classes = {'letra-roxa': true, 'fundo-rosa': true, 'fundo-azul': true, 'tamanho-pequeno': true};
}
