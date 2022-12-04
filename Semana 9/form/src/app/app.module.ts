import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { InformacoesComponent } from './informacoes/informacoes.component';
import { FormMateriasComponent } from './form-materias/form-materias.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ItemCardComponent } from './itemCard/itemCard.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    InformacoesComponent,
    FormMateriasComponent,
    NavbarComponent,
    ItemCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
