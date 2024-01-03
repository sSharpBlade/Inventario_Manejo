import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarrerasI, CategoriaI, ComentariosI, DispositivoI, LaboratorioI } from './model.bienes';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  API: string = 'http://localhost/app_manejo/';

  constructor(private clienteHttp: HttpClient) { }

  obtenerDispositivos(id_lab_per: string, id_cat_per: string): Observable<DispositivoI[]> {
    const datos = { id_lab_per: id_lab_per, id_cat_per: id_cat_per };
    return this.clienteHttp.post<DispositivoI[]>(this.API + "?componenteU", datos);
  }
  obtenerLaboratorios2(id_car_lab: string): Observable<LaboratorioI[]> {
    const datos = { id_car_lab: id_car_lab };
    return this.clienteHttp.post<LaboratorioI[]>(this.API + "?laboratoriosU", datos);
  }


  obtenerCategorias(): Observable<CategoriaI[]> {
    return this.clienteHttp.post<CategoriaI[]>(this.API + "?categorias", '');
  }

  enviarComentario(dispositivo: string, comentario: string): Observable<any> {
    const datos = { dispositivo: dispositivo, comentario: comentario };
    return this.clienteHttp.post(this.API + "?mensaje", datos);
  }

  insertarDispositivo(nombre: string, idCatPer: string,idLabPer: string,marca: string, anio: string): Observable<any> {
    const datos = { nombre: nombre, idCatPer: idCatPer, idLabPer: idLabPer ,marca: marca, anio: anio};
    return this.clienteHttp.post(this.API + "?insertarDispositivos", datos);
  }
  actualizarDispositivo(id: string, nombre: string, marca: string, anio: string): Observable<any> {
    const datos = { id: id, nombre: nombre, marca: marca, anio: anio };
    return this.clienteHttp.post(this.API + "?updateDispositivos", datos);
  }

  eliminarDispositivo(id: string): Observable<any> {
    const datos = { id: id };
    return this.clienteHttp.post(this.API + "?eliminarDispositivo", datos);
  }
  obtenerComentarios(dispositivo: string): Observable<ComentariosI[]> {
    const datos = { dispositivo: dispositivo };
    return this.clienteHttp.post<ComentariosI[]>(this.API + "?comentarios", datos);
  }

  cambiarEstado(comentario: string): Observable<any> {
    const valor = { comentario: comentario };
    return this.clienteHttp.post(this.API + "?modificar", valor);
  }

  obtenerCarreras(): Observable<CarrerasI[]> {
    return this.clienteHttp.post<CarrerasI[]>(this.API + "?todasLasCarreras", '');
}

obtenerLaboratorios(idCarrera: string): Observable<any> {
    const datos = { idCarrera: idCarrera };
    return this.clienteHttp.post(this.API + "?laboratorios", datos);
}


}

export { DispositivoI, CategoriaI, CarrerasI };
