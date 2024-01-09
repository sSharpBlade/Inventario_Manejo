import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentService } from '../../services/bienes.service';
import { DispositivoI, CategoriaI, CarrerasI, LaboratorioI } from '../../services/model.bienes';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ViewChild, ElementRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

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
  public selectedCarrera: CarrerasI = { id_car: "", nom_car: "", sem_car: "", tit_car: "", est_car: ""};
  public laboratorios: LaboratorioI[] = [];
  public selectedLaboratorio: LaboratorioI = {id:"", nom_lab:"",ubi_lab:"",cap_mes_lab:"",id_car_lab:"",est_lab:""}
  public dispositivos: DispositivoI[] = [];
  public selectedDispositivo: DispositivoI = { id: "", nombre: "", marca: "", anio: "",id_cat_per: "",id_lab_per: "",est_dis: ""};
  public formularioMSG: FormGroup;

  constructor(private  toastr: ToastrService ,private route: ActivatedRoute, private servicioC: CommentService, private router: Router, private formulario: FormBuilder) {
    this.formularioMSG = this.formulario.group({
      idLab: [""],
      idCar: [""],
      idC: [""],
      idD: [""],
      msg: [""],
      nomDis: [""],
      marDis: [""],
      anioDis: [""]
    });
    this.carreraSelect = new ElementRef(null);
  }
  @ViewChild('carreraSelect') carreraSelect: ElementRef;

  ngAfterViewInit(): void {
    // Disparar manualmente el evento change al inicio
    //this.onCarreras(this.carreraSelect.nativeElement);
  }

  ngOnInit(): void {
    

    this.servicioC.obtenerCarreras().subscribe(respuesta => {
      this.carreras = respuesta;

  });
  this.servicioC.obtenerLaboratoriosS().subscribe(respuesta => {
    this.laboratorios = respuesta;
    this.servicioC.obtenerTodosDispositivos().subscribe(respuesta => {
      this.dispositivos = respuesta;
      console.log(this.dispositivos);
    });
 });
  
  }
  onCategoria(value: any) {
    const categoriaId = value.value;
    const categoria = this.categorias.find(c => c.id === categoriaId);
  
    if (categoria) {
      this.selectedCategoria.id = categoria.id;
      this.selectedCategoria.nombre = categoria.nombre;
      console.log(this.selectedCategoria.id);
      console.log(this.selectedLaboratorio.id);
  
      // Resto del código
      this.servicioC.obtenerDispositivos(this.selectedLaboratorio.id, this.selectedCategoria.id).subscribe(respuesta => {
        this.dispositivos = respuesta;
        console.log(this.dispositivos);
      });
    }
  }
  onCarreras(value: any) {
    this.laboratorios = [];
    this.dispositivos = [];
    this.categorias = [];
    this.selectedCarrera.id_car = value.value;
    this.servicioC.obtenerLaboratorios2(value.value).subscribe(respuesta => {
      this.laboratorios = respuesta;
      console.log('Laboratorios:', this.laboratorios); 
  });
  
}
  onLaboratorios(value: any) {
    this.categorias = [];
    this.selectedLaboratorio.id = value.value;
    this.servicioC.obtenerCategorias().subscribe(respuesta => {
      this.categorias = respuesta;
    });
  }
  onDispositivos(value: DispositivoI) {
    this.selectedDispositivo.id = value.id;
    this.selectedDispositivo.nombre = value.nombre;
    this.selectedDispositivo.id_cat_per = this.selectedCategoria.id;
    this.selectedDispositivo.marca = value.marca;
    this.selectedDispositivo.anio = value.anio;
    this.formularioMSG.controls['nomDis'].setValue(this.selectedDispositivo.nombre);
    this.formularioMSG.controls['marDis'].setValue(this.selectedDispositivo.marca);
    this.formularioMSG.controls['anioDis'].setValue(this.selectedDispositivo.anio);

    console.log(this.selectedDispositivo);
  }
  actualizarDispositivos() {
    console.log("actualizarDispositivos");
    const { nomDis,marDis,anioDis } = this.formularioMSG.value;
    if (nomDis != '' && this.selectedCategoria.id != '') {
      if(nomDis != this.selectedDispositivo.nombre || marDis != this.selectedDispositivo.marca || anioDis != this.selectedDispositivo.anio){
      this.servicioC.actualizarDispositivo(this.selectedDispositivo.id,nomDis,marDis,anioDis).subscribe(respuesta => {
        if (respuesta && respuesta.success) {
          console.log(respuesta);
          //window.location.reload();
          this.toastr.success('Actualizado Correctamente', 'Hecho!');
          this.selectedDispositivo.nombre = nomDis;
          this.dispositivos = [];
          this.servicioC.obtenerDispositivos(this.selectedLaboratorio.id, this.selectedCategoria.id).subscribe(respuesta => {
            this.dispositivos = respuesta;
          });
          
        } else {
          console.log("No envio mensaje in");
          this.toastr.error('Hello world!', 'Toastr fun!');
        }
      });
    } else {
      this.toastr.show('No hay cambios', 'Ups..!');
    }
    } else {
      this.toastr.error('Llena los campos', 'Error!');
      console.log("No envio mensaje");
    }
  }

  eliminarDispositivo(){
    console.log("eliminarDispositivo");
    if(this.selectedDispositivo.id!=''){
      this.servicioC.eliminarDispositivo(this.selectedDispositivo.id).subscribe(respuesta => {
        if (respuesta && respuesta.success) {
          console.log(respuesta);
          //window.location.reload();
          this.toastr.success('Eliminado Correctamente', 'Hecho!');
          this.selectedDispositivo.nombre = '';
          this.dispositivos = [];
          this.servicioC.obtenerDispositivos(this.selectedLaboratorio.id, this.selectedCategoria.id).subscribe(respuesta => {
            this.dispositivos = respuesta;
          });
          
        } else {
          console.log("No envio mensaje in");
          this.toastr.error('No se pudo eliminar', 'Error!');
        }
      });
    }
  }
}
