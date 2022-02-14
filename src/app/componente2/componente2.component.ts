import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component implements OnInit {

  @Input('propiedadComponente2') DatosPasadosAlcomponente2: any;

  constructor() { }

  ngOnInit(): void {
  }

}
