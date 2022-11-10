import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  nomeUsuario: string = 'Bruno Modinuti';
  urlLogo: string = '../../../assets/logo_advise.svg';
  nomeEmpresa: string = 'Advise';
  urlSiteEmpresa: string = 'https://advise.com.br/';

  constructor() {}

  ngOnInit(): void {}
}
