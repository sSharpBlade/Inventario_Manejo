import { Component } from '@angular/core';
import { TecnicosService } from '../../services/tecnicos.service';
import { usuariosI } from '../../services/model.tecnicos';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-agregartec',
  templateUrl: './agregartec.component.html',
  styleUrl: './agregartec.component.css'
})
export class AgregartecComponent {
  usuarios: usuariosI[] = [];
  nombreTec= '';
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



}
