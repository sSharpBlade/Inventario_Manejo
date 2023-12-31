import { Component, OnInit } from '@angular/core';
import { CarrerasUniServiceService } from '../../services/carreras-uni.service.service';

import { carrerasI } from '../../services/model.laboratorios';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-crear-carreras',
  templateUrl: './crear-carreras.component.html',
  styleUrl: './crear-carreras.component.css'
})
export class CrearCarrerasComponent implements OnInit {
  carreras: carrerasI[] = [];
  selectedCarrera: carrerasI = {id_car:'',nom_car:'', sem_car:'', tit_car:'',est_carr:''};
  id_car= '';
  nom_car= '';
  sem_car= '';
  tit_car= '';
  Formulario:FormGroup;

  constructor(private carrerasUService: CarrerasUniServiceService, private formulario: FormBuilder) {

    this.Formulario = this.formulario.group({
      id_car: [""],
      nom_car: [""],
      sem_car: [""],
      tit_car: [""]
    });
  }

  ngOnInit(): void {
    this.carrerasUService.obtenerTodasLasCarreras().subscribe(
      data => {
        this.carreras = data;
      },
    );
  }

  idCarreras(id:any){
    console.log(id.value);
  }

  insert() {
    const{id_car, nom_car, sem_car, tit_car} = this.Formulario.value
    if (id_car!= '' && nom_car!= '' && sem_car!= ''&& tit_car!= ''  ) {
      this.carrerasUService.insertCar(id_car, nom_car,sem_car, tit_car ).subscribe(respuesta =>{ 
        console.log(respuesta)
        if (respuesta && respuesta.success) {
          window.location.reload();
        } else {
          console.log("No se agrego la carrera");
        }
      });
      
    }
  }

}
