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
  public selectedDispositivo: DispositivoI = { id: "", nombre: "", idCategoria: "" };
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

  onCategoria(value: any) {
    this.selectedCategoria.id = value.value;
    this.servicioC.obtenerDispositivos(this.labId, this.selectedCategoria.id).subscribe(respuesta => {
      this.dispositivos = respuesta;
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
          this.router.navigate(['/laboratorios', this.labId]);
        } else {
          console.log("No envio mensaje");
        }
      });
    }
  }

}
