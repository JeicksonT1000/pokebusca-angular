import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CabecalhoComponent } from './components/lista/cabecalho/cabecalho.component';
import { ListaComponent } from './components/lista/lista.component';
import { ContadorComponent } from './components/lista/contador/contador.component';
import { ItemComponent } from './components/lista/item/item.component';
import { PaginacaoComponent } from './components/lista/paginacao/paginacao.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CabecalhoComponent,
    ListaComponent,
    ContadorComponent,
    ItemComponent,
    PaginacaoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
