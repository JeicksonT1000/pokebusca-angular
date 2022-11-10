import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  nome: string = 'Nome do pokemon';
  urlImg: string =
    'https://assets.pokemon.com/static2/_ui/img/og-default-image.jpeg';
  descricao: string =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, nostrum blanditiis earum consequatur laboriosam reiciendis dolor, saepe repellendus, numquam porro deserunt aspernatur! Magni delectus cupiditate nobis alias consequatur similique earum?';

  constructor() {}

  ngOnInit(): void {}
}
