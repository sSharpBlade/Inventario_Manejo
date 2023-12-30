import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { carrerasI } from './model.laboratorios';

@Injectable({
  providedIn: 'root'
})
export class LoboratoriosServiceService {

  API: string = 'http://localhost/app_manejo/'

  constructor( private http:HttpClient) {}
  
  obtenerTodasLasCarreras(): Observable<carrerasI[]> {
    return this.http.post<carrerasI[]>(this.API + "?todasLasCarreras",'');
  }

//  insertarLaboratorio(nombre: string, ubicacion: string, capMesas: number, laboratorio: any): Observable<any> {
  //  const datos = { nombre: nombre, ubicacion: ubicacion, capMesas: capMesas, laboratorio: laboratorio };
    //return this.http.post<any>(`${this.API}/insertarLaboratorio`, datos);
  //}

  insertarLaboratorio(laboratorio: any): Observable<any> {
    return this.http.post<any>(`${this.API}/insertarLaboratorio`, laboratorio);
  }
}
