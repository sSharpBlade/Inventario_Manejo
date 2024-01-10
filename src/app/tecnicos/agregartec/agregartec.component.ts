import { Component } from '@angular/core';
import { TecnicosService } from '../../services/tecnicos.service';
import { userI } from '../../services/model.laboratorios';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-agregartec',
  templateUrl: './agregartec.component.html',
  styleUrl: './agregartec.component.css'
})
export class AgregartecComponent {
  usuarios: userI[] = [];
  nombre= '';
  correo= '';
  password= '';
  Formulario:FormGroup;

  constructor(private TecnicosService: TecnicosService, private formulario: FormBuilder) {

    this.Formulario = this.formulario.group({
      nombre: [""],
      correo: [""],
      password: [""],
    });
  }


  insert() {
    const{nombre, correo, password} = this.Formulario.value
    if (nombre!= '' && correo!= '' && password!= '' ) {
      this.TecnicosService.insertTec(nombre, correo, password ).subscribe(respuesta =>{ 
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
