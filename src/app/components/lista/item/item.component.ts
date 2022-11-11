import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  constructor() {}

  @Input() id: number = 0;
  @Input() nome: string = '';
  @Input() urlImg: string = '';
  descricao: string =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, nostrum blanditiis earum consequatur laboriosam reiciendis dolor, saepe repellendus, numquam porro deserunt aspernatur! Magni delectus cupiditate nobis alias consequatur similique earum?';
}
