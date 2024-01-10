import { Component, OnInit } from '@angular/core';
import { LoboratoriosServiceService } from '../services/loboratorios.service';
import { userI } from '../services/model.laboratorios';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tecnicos',
  templateUrl: './tecnicos.component.html',
  styleUrls: ['./tecnicos.component.css']
})
export class TecnicosComponent implements OnInit {
  usuarios: userI[] = [];
  traeruser: userI= {id:'', nombre:'', correo:'',password:'', rol:''};
  Formulario:FormGroup;

  constructor(private loboratoriosService: LoboratoriosServiceService,private formulario: FormBuilder) {
    this.Formulario = this.formulario.group({
      id: [""],
      nombre: [""],
      correo: [""],
      password: [""],
      rol:[""],
    });
  }

  ngOnInit() {
    this.loboratoriosService.obtenerUsuarioLab().subscribe(
      data => {
        this.usuarios = data;
      },
    )
  }
}
