import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentService } from '../../services/bienes.service';
import { DispositivoI, CategoriaI, CarrerasI, LaboratorioI } from '../../services/model.bienes';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-bienes',
  templateUrl: './add-bienes.component.html',
  styleUrl: './add-bienes.component.css'
})
export class AddBienesComponent implements OnInit {
  labId: any;
 
  public selectedCategoria: CategoriaI = { id: "", nombre: "" };
  public categorias: CategoriaI[] = [];
  public carreras: CarrerasI[] = [];
  public selectedCarrera: CarrerasI = { id: "", nombre: "" };
  public laboratorios: LaboratorioI[] = [];
  public selectedLaboratorio: LaboratorioI = { id: "", nombre: "", idCarreraPer: "" };
  public dispositivos: DispositivoI[] = [];
  public formularioMSG: FormGroup;

  constructor(private route: ActivatedRoute, private servicioC: CommentService, private router: Router, private formulario: FormBuilder) {
    this.formularioMSG = this.formulario.group({
      idCar: [""],
      idC: [""],
      idD: [""],
      msg: [""]
    });
  }

  ngOnInit(): void {
    this.servicioC.obtenerCategorias().subscribe(respuesta => {
      this.categorias = respuesta;
    });

    this.servicioC.obtenerCarreras().subscribe(respuesta => {
      this.carreras = respuesta;

  });
  }
  onCategoria(value: any) {
    this.selectedCategoria.id = value.value;
    this.servicioC.obtenerDispositivos(this.labId, this.selectedCategoria.id).subscribe(respuesta => {
      this.dispositivos = respuesta;
    });
  }
  onCarreras(value: any) {
    this.servicioC.obtenerCarreras().subscribe(respuesta => {
      this.carreras = respuesta;

  });
}
  onLaboratorios(value: any) {
    this.selectedCarrera.id = value.value;
    this.servicioC.obtenerLaboratorios(this.selectedCarrera.id).subscribe(respuesta => {
      this.laboratorios = respuesta;
    });
  }
}
