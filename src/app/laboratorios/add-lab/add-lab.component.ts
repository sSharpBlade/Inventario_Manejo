import { Component, OnInit } from '@angular/core';
import { LoboratoriosServiceService } from '../../services/loboratorios.service';

@Component({
  selector: 'app-add-lab',
  templateUrl: './add-lab.component.html',
  styleUrl: './add-lab.component.css'
})
export class AddLabComponent implements OnInit {
  carreras: any[] = [];
  selectedCarrera: any;

  constructor(private loboratoriosService: LoboratoriosServiceService) {}

  ngOnInit(): void {
    // Llamada al servicio para obtener las carreras
    this.loboratoriosService.obtenerTodasLasCarreras().subscribe(
      data => {
        this.carreras = data;
      },
      error => {
        console.error('Error al obtener las carreras', error);
      }
    );
  }
}
