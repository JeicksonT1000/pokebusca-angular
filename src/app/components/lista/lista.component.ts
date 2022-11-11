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
  // Controle de itens exibidos
  pagina: number = 1;
  limiteItens: number = 5;
  totalItens: number = 0;
  itemControle: number = this.pagina * this.limiteItens;
  itemBusca: any = {};

  atualizaPagina(pagina: number) {
    this.pagina = pagina;
    this.itemControle = this.pagina * this.limiteItens;
  }

  onNavPage(event: any) {
    this.atualizaPagina(event);
  }

  onEventBuscar(event: any) {
    this.itemBusca = event;
  }

  async ngOnInit() {
    await this.api.montaListaPokemons().then((res) => {
      this.listaPokemons = res;
    });
  }
}
