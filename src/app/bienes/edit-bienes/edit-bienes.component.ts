import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentService } from '../../services/bienes.service';
import { DispositivoI, CategoriaI, CarrerasI, LaboratorioI } from '../../services/model.bienes';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-edit-bienes',
  templateUrl: './edit-bienes.component.html',
  styleUrl: './edit-bienes.component.css'
})
export class EditBienesComponent implements OnInit, AfterViewInit{
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
      idLab: [""],
      idCar: [""],
      idC: [""],
      idD: [""],
      msg: [""]
    });
    this.carreraSelect = new ElementRef(null);
  }
  @ViewChild('carreraSelect') carreraSelect: ElementRef;

  ngAfterViewInit(): void {
    // Disparar manualmente el evento change al inicio
    this.onCarreras(this.carreraSelect.nativeElement);
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
    this.selectedCarrera.id = value.value;
    this.servicioC.obtenerLaboratorios2(value.value).subscribe(respuesta => {
      this.laboratorios = respuesta;
      console.log('Laboratorios:', this.laboratorios); 
  });
  
}
  onLaboratorios(value: any) {
    this.selectedLaboratorio.id = value.value;

  }
}
