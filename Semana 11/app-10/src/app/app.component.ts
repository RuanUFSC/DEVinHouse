import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  opcaoSelecionada: string = '';
  selectedOption: string = '';
  generos = ['acao', 'comedia', 'aventura', 'aleatorio']
}
