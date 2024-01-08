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

  obtenerDispositivos(idC: string): Observable<DispositivoI[]> {
    const datos = { idC: idC };
    return this.clienteHttp.post<DispositivoI[]>(this.API + "?componente", datos);
  }

  obtenerCategorias(): Observable<CategoriaI[]> {
    return this.clienteHttp.post<CategoriaI[]>(this.API + "?categorias", '');
  }

  enviarComentario(dispositivo: string, comentario: string): Observable<any> {
    const datos = { dispositivo: dispositivo, comentario: comentario };
    return this.clienteHttp.post(this.API + "?mensaje", datos);
  }

  obtenerComentarios(): Observable<ComentariosI[]> {
    return this.clienteHttp.post<ComentariosI[]>(this.API + "?comentarios", '');
  }

  obtenerComentariosMe(tecnico: string): Observable<ComentariosI[]> {
    const valor = { tecnico: tecnico };
    return this.clienteHttp.post<ComentariosI[]>(this.API + "?comentariosMe", valor);
  }

  cambiarEstado(comentario: string): Observable<any> {
    const valorC = { comentario: comentario };
    return this.clienteHttp.post(this.API + "?modificar", valorC);
  }

  eliminar(comentario: string): Observable<any> {
    const valor = { comentario: comentario };
    return this.clienteHttp.post(this.API + "?eliminarComentario", valor);
  }

  asignarTarea(comentario: string, tecnico: string): Observable<any> {
    const datos = { comentario: comentario, tecnico: tecnico };
    return this.clienteHttp.post(this.API + "?asignarme", datos);
  }

}
