import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { carrerasI, laboratorioI } from './model.laboratorios';

@Injectable({
  providedIn: 'root'
})
export class LoboratoriosServiceService {

  API: string = 'http://localhost/app_manejo/'

  constructor( private http:HttpClient) {}
  
  obtenerTodasLasCarreras(): Observable<carrerasI[]> {
    return this.http.post<carrerasI[]>(this.API + "?todasLasCarreras",'');
  }

  insertarLaboratorio(nom_lab:string, ubi_lab:string,cap_mes_lab:string, id_car_lab: string): Observable<any> {
    const datos = {id_car_lab:id_car_lab, nom_lab:nom_lab, ubi_lab: ubi_lab, cap_mes_lab:cap_mes_lab }
    return this.http.post(this.API + "?insertarLaboratorio", datos);
  }

  obtenerLaboratorios(): Observable<laboratorioI[]> {
    return this.http.post<laboratorioI[]>(this.API + "?laboratoriosCreados",'');
  }

  eliminarLaboratorio(id: string): Observable<any> {
    const valor = { id: id };
    return this.http.post(this.API + "?eliminarLaboratorio", valor);
  }


}
