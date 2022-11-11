import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaComponent implements OnInit {
  constructor(private api: ApiService) {}

  listaPokemons: Array<any> = [];
  itensRender: Array<any> = [];
  limiteItens: number = 5;
  pagina: number = 1;
  itemControle: number = this.pagina * this.limiteItens;

  atualizaPagina(pagina: number) {
    this.pagina = pagina;
    this.itemControle = this.pagina * this.limiteItens;
  }

  onNavPage(event: any) {
    this.atualizaPagina(event);
  }

  onEventBuscar(event: any) {
    if (event.length > 0) {
      this.itensRender = event;
      this.atualizaPagina(1);
    } else {
      this.itensRender = this.listaPokemons;
    }
  }

  async ngOnInit() {
    await this.api
      .montaListaPokemons(21)
      .then((res) => {
        this.listaPokemons = res;
      })
      .then(() => {
        this.itensRender = this.listaPokemons;
      });
  }
}
