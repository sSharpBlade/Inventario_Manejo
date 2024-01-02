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
  labId: any;
  public selectedCategoria: CategoriaI = { id: "", nombre: "" };
  public selectedDispositivo: DispositivoI = { id: "", nombre: "", idCategoria: "" };
  public selectedComentario: ComentariosI = { id: "", comentario: "", idDispositivo: "", estado: 0 };
  public categorias: CategoriaI[] = [];
  public dispositivos: DispositivoI[] = [];
  public comentarios: ComentariosI[] = [];
  public msg: string = '';
  public formularioMSG: FormGroup;

  constructor(private route: ActivatedRoute, private servicioC: CommentService, private router: Router, private formulario: FormBuilder) {
    this.formularioMSG = this.formulario.group({
      idC: [""],
      idD: [""],
      idM: [""]
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

  getComments(value: any) {
    this.selectedDispositivo = value.value;
    this.servicioC.obtenerComentarios(value.value).subscribe(respuesta => {
      if (respuesta.length > 0) {
        this.comentarios = respuesta;
      }
    });
  }

  revisar(value: any) {
    this.servicioC.cambiarEstado(value.value).subscribe(
      res => {
        window.location.reload();
      }
    );
  }

}
