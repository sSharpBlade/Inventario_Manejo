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
  public selectedCategoria: CategoriaI = { id: '0', nombre: '' };
  public categorias!: CategoriaI[];
  public dispositivos!: DispositivoI[];

  constructor(private route: ActivatedRoute, private servicioC: CommentService) { }

  public valorCat(id: any) {
    console.log(id);
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.labId = params['id'];
    });

    this.servicioC.obtenerCategorias().subscribe(respuesta => {
      console.log(respuesta);
      this.categorias = respuesta;
    });

    this.servicioC.obtenerDispositivos(this.labId).subscribe(respuesta => {
      console.log(respuesta);
      this.dispositivos = respuesta;
    });

  }

}
