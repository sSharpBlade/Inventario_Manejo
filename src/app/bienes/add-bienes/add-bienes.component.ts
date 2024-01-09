import { AfterViewInit,Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentService } from '../../services/bienes.service';
import { DispositivoI, CategoriaI, CarrerasI, LaboratorioI } from '../../services/model.bienes';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ViewChild, ElementRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-add-bienes',
  templateUrl: './add-bienes.component.html',
  styleUrl: './add-bienes.component.css'
})
export class AddBienesComponent implements OnInit, AfterViewInit {
  labId: any;
 
  public selectedCategoria: CategoriaI = { id: "", nombre: "" };
  public categorias: CategoriaI[] = [];
  public carreras: CarrerasI[] = [];
  public selectedCarrera: CarrerasI = { id_car: "", nom_car: "", sem_car: "", tit_car: "", est_car: ""};
  public laboratorios: LaboratorioI[] = [];
  public selectedLaboratorio: LaboratorioI = {id:"", nom_lab:"",ubi_lab:"",cap_mes_lab:"",id_car_lab:"",est_lab:""};
  public dispositivos: DispositivoI[] = [];
  public selectedDispositivo: DispositivoI = { id: "", nombre: "", marca: "", anio: "",id_cat_per: "",id_lab_per: "",est_dis: ""};
  public formularioMSG: FormGroup;
  public modalElement: any;

  constructor(private toastr: ToastrService,private route: ActivatedRoute, private servicioC: CommentService, private router: Router, private formulario: FormBuilder) {
    this.formularioMSG = this.formulario.group({
      idLab: [""],
      idCar: [''],
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
    this.servicioC.obtenerCategorias().subscribe(respuesta => {
      this.categorias = respuesta;
      console.log(respuesta);
    });

    this.servicioC.obtenerCarreras().subscribe(respuesta => {
      this.carreras = respuesta;
      console.log(respuesta);
      console.log(this.carreras);

  });
  this.servicioC.obtenerLaboratoriosS().subscribe(respuesta => {
    this.laboratorios = respuesta;
    console.log(respuesta);
    console.log(this.laboratorios);
 });
  
  
  }
  onCategoria(value: any) {
    
    this.selectedCategoria.id = value.value;
    this.servicioC.obtenerDispositivos(this.labId, this.selectedCategoria.id).subscribe(respuesta => {
      this.dispositivos = respuesta;
    });
  }
  onCarreras(value: any) {
    console.log(this.carreras);
    this.selectedCarrera.id_car = value.value;
    console.log(this.selectedCarrera.id_car);
    this.servicioC.obtenerLaboratorios2(this.selectedCarrera.id_car).subscribe(respuesta => {
      this.laboratorios = respuesta;
      
      console.log('Laboratorios:', this.laboratorios); 
  });
}
  onLaboratorios(value: any) {
    this.selectedLaboratorio.id = value.value;
    console.log(this.selectedLaboratorio.id);
  }
  onCategoriaSelected(categoria: CategoriaI) {
    // Aquí guardamos la categoría seleccionada en selectedDispositivo
    this.selectedCategoria.id = categoria.id;
    console.log(this.selectedCategoria.id);

    // También puedes realizar otras acciones aquí si es necesario
  }
  sendMsg() {
    const { idD, msg } = this.formularioMSG.value;
    if (idD != '' && msg != '') {
      this.servicioC.enviarComentario(idD, msg).subscribe(respuesta => {
        if (respuesta && respuesta.success) {
          console.log(respuesta);
          window.location.reload();
        } else {
          console.log("No envio mensaje");
        }
      });
    }
  }
  onDispostivoSelected(dispositivo: any) {
    // Aquí guardamos el dispositivo seleccionado en selectedDispositivo
    this.selectedDispositivo = dispositivo;
    

    // También puedes realizar otras acciones aquí si es necesario
  }
  onClose(){
    this.selectedCategoria.id = '';
  }
  insertarDispositivos(){
    console.log("insertarDispositivos")
    const { nomDis, marDis, anioDis } = this.formularioMSG.value;
    if (nomDis != '' && this.selectedCategoria.id != '') {
      this.servicioC.insertarDispositivo(nomDis, this.selectedCategoria.id,this.selectedLaboratorio.id,marDis,anioDis).subscribe(respuesta => {
        if (respuesta && respuesta.success) {
          console.log(respuesta);
          //window.location.reload();
          this.toastr.success('Guardado Correctamente', 'Hecho!');
          this.formularioMSG.controls['nomDis'].setValue('');
          this.formularioMSG.controls['marDis'].setValue('');
          this.formularioMSG.controls['anioDis'].setValue('');
          
        } else {
          console.log("No envio mensaje in");
          this.toastr.error('Hello world!', 'Toastr fun!');
        }
      });
    }
    else{
      this.toastr.error('Llena los campos', 'Error!');
      console.log("No envio mensaje");
    }
  }
}
