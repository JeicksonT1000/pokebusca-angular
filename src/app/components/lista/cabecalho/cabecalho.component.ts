import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss'],
})
export class CabecalhoComponent implements OnInit {
  titulo: string = 'Fase do teste prático Front-end';
  subtitulo: string = 'Pokebusca';
  termoBusca: string = '';

  buscarPokemon() {
    // Api
    console.log(this.termoBusca);
  }

  ngOnInit(): void {
    console.log('Inicio');
  }
}
