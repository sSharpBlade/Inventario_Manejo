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
  selectedCarrera: carrerasI = {id_car:'',nom_car:'', sem_car:'', tit_car:'',est_car:''};
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
  
  insert() {
    const{nom_lab, ubi_lab, cap_mes_lab,id_car} = this.Formulario.value
    if (nom_lab!= '' && ubi_lab!= '' && cap_mes_lab!= ''&& id_car!= ''  ) {
      this.loboratoriosService.insertLab(nom_lab, ubi_lab, cap_mes_lab,id_car, ).subscribe(respuesta =>{ 
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
