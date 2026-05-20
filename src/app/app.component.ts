import { Component } from '@angular/core';

type Boton = {
  text: string;
  color: string;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  colorCuadrado: string = '#CCCCCC';
  
  botones: Boton[] = [
    { text: 'Rojo', color: '#FF0000' },
    { text: 'Azul', color: '#0000FF' },
    { text: 'Verde', color: '#00FF00' },
    { text: 'Amarillo', color: '#FFFF00' }
  ];
  
  cambiarColor(color: string): void {
    this.colorCuadrado = color;
  }
}