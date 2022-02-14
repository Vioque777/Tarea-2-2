import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {

  curso1: any = {
    nombre: 'Beca Angular',
    total_dias: 9,
    descripcion: 'Curso de Angular y Typescript'
  }
  curso2: any = {
    nombre: 'Beca Java',
    total_dias: 10,
    descripcion: 'Formación sobre Java'
  }
  contador:number = 0;

  constructor() { 
    console.log('Creación componente 1')
  }

  ngOnInit(): void {
  }
  cambiarVariable(){
    const datosCurso1 = this.curso1;
    this.curso1 = this.curso2;
    this.curso2 = datosCurso1;
    this.contador = this.contador+1;
  }

}
