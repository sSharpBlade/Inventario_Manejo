import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { carrerasI } from './model.laboratorios';

@Injectable({
  providedIn: 'root'
})
export class CarrerasUniServiceService {

  API: string = 'http://localhost/app_manejo/'

  constructor(private http:HttpClient) { }

  obtenerTodasLasCarreras(): Observable<carrerasI[]> {
    return this.http.post<carrerasI[]>(this.API + "?todasLasCarreras",'');
  }

  insertCar(id_car:string, nom_car:string): Observable<any> {
    const datos = {id_car:id_car, nom_car:nom_car }
    return this.http.post(this.API + "?insertarCarrera", datos);
  }

  obtenerCarrera(): Observable<carrerasI[]> {
    return this.http.post<carrerasI[]>(this.API + "?carrerasCreadas",'');
  }

  eliminarCarrera(id_car: string): Observable<any> {
    const valor = { id_car: id_car };
    return this.http.post(this.API + "?eliminarCarrera", valor);
  }


}
