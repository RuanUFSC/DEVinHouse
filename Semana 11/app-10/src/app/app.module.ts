import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CaptalizePhillipsPipe } from './pipes/captalize-phillips.pipe';
import { CpfPipe } from './pipes/cpf.pipe';
import { ModalComponent } from './components/modal/modal.component';
import { CardExemploComponent } from './components/card-exemplo/card-exemplo.component';
import { FormValidacaoComponent } from './components/form-validacao/form-validacao.component';
import { TodoListComponent } from './components/todo-list/todo-list.component'

@NgModule({
  declarations: [
    AppComponent,
    CaptalizePhillipsPipe,
    CpfPipe,
    ModalComponent,
    CardExemploComponent,
    FormValidacaoComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
