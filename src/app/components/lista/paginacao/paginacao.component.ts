import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginacao',
  templateUrl: './paginacao.component.html',
  styleUrls: ['./paginacao.component.scss'],
})
export class PaginacaoComponent {
  constructor() {}

  @Output() navPage: EventEmitter<any> = new EventEmitter();

  pagina: number = 1;
  total: number = 4;

  voltar() {
    this.pagina > 1 ? this.pagina-- : null;
    this.navPage.emit(this.pagina);
  }
  avancar() {
    this.pagina < this.total ? this.pagina++ : null;
    this.navPage.emit(this.pagina);
  }

  primeira() {
    this.pagina = 1;
    this.navPage.emit(this.pagina);
  }

  ultima() {
    this.pagina = this.total;
    this.navPage.emit(this.pagina);
  }
}
