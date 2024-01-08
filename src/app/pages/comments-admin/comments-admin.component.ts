import { Component } from '@angular/core';
import { CategoriaI, ComentariosI, DispositivoI } from '../../services/model.interface';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentService } from '../../services/comment.service';

@Component({
  selector: 'app-comments-admin',
  templateUrl: './comments-admin.component.html',
  styleUrl: './comments-admin.component.css'
})
export class CommentsAdminComponent {
  usuId: any;
  public selectedCategoria: CategoriaI = { id: "", nombre: "" };
  public selectedDispositivo: DispositivoI = { id: "", nombre: "", idCategoria: "", nom_lab: "" };
  public selectedComentario: ComentariosI = { id: "", comentario: "", idDispositivo: "", estado: 0, nom_lab: '', nombre_dis: '', nom_cat: '' };
  public categorias: CategoriaI[] = [];
  public dispositivos: DispositivoI[] = [];
  public comentarios: ComentariosI[] = [];
  public msg: string = '';
  public formularioMSG: FormGroup;

  constructor(private route: ActivatedRoute, private servicioC: CommentService, private formulario: FormBuilder) {
    this.formularioMSG = this.formulario.group({
      idC: [""],
      idD: [""],
      idM: [""]
    });

    this.route.params.subscribe(params => {
      this.usuId = params['id'];
    });
  }

  ngOnInit(): void {

    this.servicioC.obtenerComentarios().subscribe(respuesta => {
      if (respuesta.length > 0) {
        this.comentarios = respuesta;
      }
    });

  }

  asignarme(valor: string) {
    this.servicioC.asignarTarea(valor, this.usuId).subscribe(res => {
      window.location.reload();
    });
  }

  eliminar(valor: string) {
    this.servicioC.eliminar(valor).subscribe(res => {
      window.location.reload();
    });
  }

}
