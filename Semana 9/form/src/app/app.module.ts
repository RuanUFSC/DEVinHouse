import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { InformacoesComponent } from './pages/informacoes/informacoes.component';
import { FormMateriasComponent } from './pages/form-materias/form-materias.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ItemCardComponent } from './pages/itemCard/itemCard.component';
import { FormsModule } from '@angular/forms';
import { FormLoginComponent } from './pages/form-login/form-login.component';
import { SearchComponent } from './pages/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    InformacoesComponent,
    FormMateriasComponent,
    NavbarComponent,
    ItemCardComponent,
    FormLoginComponent,
    SearchComponent
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
