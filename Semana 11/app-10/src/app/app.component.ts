import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  page: string = '';
  changePage(valorClicado: any){
    this.page = valorClicado;
  }
}
