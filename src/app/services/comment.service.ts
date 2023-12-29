import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriaI, DispositivoI } from './model.interface';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private dispositivo: DispositivoI[] = [];
  private categoria: CategoriaI[] = [];

  API: string = 'http://localhost/API_Inventarios/';

  constructor(private clienteHttp: HttpClient) { }

  obtenerDispositivos(idD: string): Observable<DispositivoI[]> {
    const datos = { idD: idD };
    return this.clienteHttp.post<DispositivoI[]>(this.API + "?componente", datos);
  }

  obtenerCategorias(): Observable<CategoriaI[]> {
    return this.clienteHttp.post<CategoriaI[]>(this.API + "?categorias", '');
  }



}
