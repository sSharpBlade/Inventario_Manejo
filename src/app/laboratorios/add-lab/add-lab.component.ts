import { Component, OnInit } from '@angular/core';
import { LoboratoriosServiceService } from '../../services/loboratorios.service';
import { carrerasI } from '../../services/model.laboratorios';

@Component({
  selector: 'app-add-lab',
  templateUrl: './add-lab.component.html',
  styleUrl: './add-lab.component.css'
})

export class AddLabComponent implements OnInit {
  carreras: carrerasI[] = [];
  selectedCarrera: carrerasI = {id_car:'',nom_car:'',est_carr:''};
  nuevoLaboratorio: any = {
    nombreLab: '',
    ubicacion: '',
    capacidadMesas: 0,
    idCarrera: 1
  };

  constructor(private loboratoriosService: LoboratoriosServiceService) {}

  
  ngOnInit(): void {
    this.loboratoriosService.obtenerTodasLasCarreras().subscribe(
      data => {
        this.carreras = data;
      },
    );
  }

  insertarLaboratorio() {
    // Verificación básica de que se ha seleccionado una carrera
    if (!this.selectedCarrera) {
      console.error('Seleccione una carrera antes de insertar un laboratorio.');
      return;
    }

    // Asignamos el ID de la carrera seleccionada al nuevo laboratorio
    this.nuevoLaboratorio.idCarrera = this.selectedCarrera;

    // Llamada al servicio para insertar un nuevo laboratorio
    this.loboratoriosService.insertarLaboratorio(this.nuevoLaboratorio).subscribe(
      response => {
        console.log('Laboratorio insertado con éxito', response);
        // Puedes realizar acciones adicionales aquí si es necesario
      },
      error => {
        console.error('Error al insertar el laboratorio', error);
        // Puedes manejar el error aquí según tus necesidades
      }
    );
  }

}
