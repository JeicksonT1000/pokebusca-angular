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

  titulo: string = 'Fase teste prático Front_end';
  subtitulo: string = 'Pokebusca';
  termoBusca: string = '';
  itemEncontrado: boolean = false;
  timeOutBusca: any = null;

  buscarPokemon() {
    clearTimeout(this.timeOutBusca);
    if (this.termoBusca.length > 0) {
      this.timeOutBusca = setTimeout(async () => {
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
      }, 1000);
    } else {
      this.eventBuscar.emit([]);
      this.itemEncontrado = false;
    }
  }
}
