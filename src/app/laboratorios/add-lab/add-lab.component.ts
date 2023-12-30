import { Component, OnInit } from '@angular/core';
import { LoboratoriosServiceService } from '../../services/loboratorios.service';
import { carrerasI } from '../../services/model.laboratorios';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-lab',
  templateUrl: './add-lab.component.html',
  styleUrl: './add-lab.component.css'
})

export class AddLabComponent implements OnInit {
  carreras: carrerasI[] = [];
  selectedCarrera: carrerasI = {id_car:'',nom_car:'',est_carr:''};
  nombreLab= '';
  ubicacion= '';
  capacidadMesas= 0;
  idCarrera= 1;
  Formulario:FormGroup;

  constructor(private loboratoriosService: LoboratoriosServiceService, private formulario: FormBuilder) {

    this.Formulario = this.formulario.group({
      id_car: [""],
      nom_lab: [""],
      ubi_lab: [""],
      cap_mes_lab: [""],
    });
  }
  
  ngOnInit(): void {
    this.loboratoriosService.obtenerTodasLasCarreras().subscribe(
      data => {
        this.carreras = data;
      },
    );
  }

  idCarreras(id:any){
    console.log(id.value);
  }
  
  insertarLaboratorio() {
    const{id_car, nom_lab, ubi_lab, cap_mes_lab} = this.Formulario.value
    if (id_car!= '' && nom_lab!= '' && ubi_lab!= '' && cap_mes_lab!= '') {
      this.loboratoriosService.insertarLaboratorio(id_car, nom_lab, ubi_lab, cap_mes_lab).subscribe(respuesta =>{ 
        console.log(respuesta)
        if (respuesta && respuesta.success) {
          window.location.reload();
        } else {
          console.log("No envio el Lab");
        }
      });
      
    }
  }

}
