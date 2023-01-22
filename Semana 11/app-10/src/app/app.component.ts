import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  clicou:boolean = false;
  classes = {'clicked': this.clicou};
  changeValor() {
    this.clicou = !this.clicou;
    this.classes = {'clicked': this.clicou};
  };
}
