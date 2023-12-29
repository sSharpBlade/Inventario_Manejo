import { Component } from '@angular/core';

@Component({
  selector: 'app-bienes',
  templateUrl: './bienes.component.html',
  styleUrl: './bienes.component.css'
})
export class BienesComponent {
  contenidoModal: string = '';

  mostrarContenido(opcion: string): void {
    if (opcion === 'Mac') {
      this.contenidoModal = 'Contenido para Mac';
    } else if (opcion === 'Teclado') {
      this.contenidoModal = 'Contenido para Teclado';
    }
  }
}
