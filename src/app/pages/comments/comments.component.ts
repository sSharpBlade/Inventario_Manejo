import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from '../../services/comment.service';
import { DispositivoI, CategoriaI } from '../../services/model.interface';

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
  public comentario: string = '';

  constructor(private route: ActivatedRoute, private servicioC: CommentService) { }

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
    this.servicioC.obtenerDispositivos(this.labId, value.value).subscribe(respuesta => {
      this.dispositivos = respuesta;
      console.log(this.dispositivos);
    });
  }

  onDispositivo(value: any) {
    this.selectedDispositivo.id = value.value;
    console.log("El dispositivo es: ", value.value)
  }

}
