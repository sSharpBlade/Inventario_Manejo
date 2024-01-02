import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriaI, ComentariosI, DispositivoI } from './model.interface';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  API: string = 'http://localhost/app_manejo/';

  constructor(private clienteHttp: HttpClient) { }

  obtenerDispositivos(idL: string, idC: string): Observable<DispositivoI[]> {
    const datos = { idL: idL, idC: idC };
    return this.clienteHttp.post<DispositivoI[]>(this.API + "?componente", datos);
  }

  obtenerCategorias(): Observable<CategoriaI[]> {
    return this.clienteHttp.post<CategoriaI[]>(this.API + "?categorias", '');
  }

  enviarComentario(dispositivo: string, comentario: string): Observable<any> {
    const datos = { dispositivo: dispositivo, comentario: comentario };
    return this.clienteHttp.post(this.API + "?mensaje", datos);
  }

  obtenerComentarios(dispositivo: string): Observable<ComentariosI[]> {
    const datos = { dispositivo: dispositivo };
    return this.clienteHttp.post<ComentariosI[]>(this.API + "?comentarios", datos);
  }

  cambiarEstado(comentario: string): Observable<any> {
    const valor = { comentario: comentario };
    return this.clienteHttp.post(this.API + "?modificar", valor);
  }

}
