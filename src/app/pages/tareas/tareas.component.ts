import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from '../../services/comment.service';
import { ComentariosI } from '../../services/model.interface';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.css'
})
export class TareasComponent {
  usuId: any;
  public selectedComentario: ComentariosI = { id: "", comentario: "", idDispositivo: "", estado: 0, nom_lab: '', nombre_dis: '', nom_cat: '' };
  public comentarios: ComentariosI[] = [];

  constructor(private router: ActivatedRoute, private servicioC: CommentService) {
    this.router.params.subscribe(params => {
      this.usuId = params['id'];
    });

    console.log("Usuario ", this.usuId);
  }

  ngOnInit(): void {

    this.servicioC.obtenerComentariosMe(this.usuId).subscribe(respuesta => {
      if (respuesta.length > 0) {
        this.comentarios = respuesta;
      }
    });

  }

  revisar(value: string) {
    this.servicioC.cambiarEstado(value).subscribe(
      res => {
        window.location.reload();
      }
    );
  }

}
