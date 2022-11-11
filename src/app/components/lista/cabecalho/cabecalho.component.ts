import { Component, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss'],
})
export class CabecalhoComponent {
  constructor(private api: ApiService) {}

  @Output() eventBuscar: EventEmitter<any> = new EventEmitter();

  titulo: string = 'Fase do teste prático Front-end';
  subtitulo: string = 'Pokebusca';
  termoBusca: string = '';
  itemEncontrado: boolean = false;

  async buscarPokemon() {
    if (this.termoBusca.length > 0) {
      await this.api
        .buscarPokemon(this.termoBusca)
        .then((res) => {
          this.eventBuscar.emit([res]);
          this.itemEncontrado = true;
        })
        .catch(() => {
          this.eventBuscar.emit([]);
          this.itemEncontrado = false;
        });
    } else {
      this.eventBuscar.emit([]);
      this.itemEncontrado = false;
    }
  }
}
