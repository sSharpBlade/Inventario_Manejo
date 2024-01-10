import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentService } from '../../services/comment.service';
import { DispositivoI, CategoriaI } from '../../services/model.interface';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent implements OnInit {

  labId: any;
  public selectedCategoria: CategoriaI = { id: "", nombre: "" };
  public selectedDispositivo: DispositivoI = { id: "", nombre: "", idCategoria: "", nom_lab: "" };
  public categorias: CategoriaI[] = [];
  public dispositivos: DispositivoI[] = [];
  public msg: string = '';
  public formularioMSG: FormGroup;

  constructor(private route: ActivatedRoute, private servicioC: CommentService, private router: Router, private formulario: FormBuilder) {
    this.formularioMSG = this.formulario.group({
      idC: [""],
      idD: [""],
      msg: [""]
    });
  }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.labId = params['id'];
    });

    this.servicioC.obtenerCategorias().subscribe(respuesta => {
      this.categorias = respuesta;
    });

  }

  onCategoria(value: string) {
    this.selectedCategoria.id = value;
    this.servicioC.obtenerDispositivos(this.selectedCategoria.id).subscribe(respuesta => {
      this.dispositivos = respuesta;
      this.selectedDispositivo.id = '';
    });
  }

  onDispositivo(value: any) {
    this.selectedDispositivo.id = value.value;
  }

  sendMsg() {
    const { idD, msg } = this.formularioMSG.value;
    if (idD != '' && msg != '') {
      this.servicioC.enviarComentario(idD, msg).subscribe(respuesta => {
        if (respuesta && respuesta.success) {
          console.log(respuesta);
          this.exit();
        } else {
          console.log("No envio mensaje");
        }
      });
    }
  }

  exit() {
    window.location.reload();
  }

}
