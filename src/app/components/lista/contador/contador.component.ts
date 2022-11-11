import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss'],
})
export class ContadorComponent {
  @Input() totalItens: number = 0;
  @Input() limiteItens: number = 0;
}
