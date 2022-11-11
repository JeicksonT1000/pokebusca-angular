import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-paginacao',
  templateUrl: './paginacao.component.html',
  styleUrls: ['./paginacao.component.scss'],
})
export class PaginacaoComponent {
  constructor() {}

  @Output() navPage: EventEmitter<any> = new EventEmitter();

  pagina: number = 1;
  total: number = 1;
  @Input() totalItens: number = 0;
  @Input() limiteItens: number = 0;

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

  qtPaginas() {
    this.total = Math.floor(this.totalItens / this.limiteItens);
    this.totalItens % this.limiteItens != 0
      ? (this.total = this.total + 1)
      : null;
  }

  ngDoCheck() {
    this.qtPaginas();
  }
}
