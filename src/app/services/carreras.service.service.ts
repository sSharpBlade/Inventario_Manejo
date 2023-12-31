import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { carrerasI } from './model.laboratorios';

@Injectable({
  providedIn: 'root'
})
export class CarrerasServiceService {

  API: string = 'http://localhost/app_manejo/'

  constructor( private http:HttpClient) { }

  obtenerTodasLasCarreras(): Observable<carrerasI[]> {
    return this.http.post<carrerasI[]>(this.API + "?todasLasCarreras",'');
  }
}
