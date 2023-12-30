import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoboratoriosServiceService {

  API: string = 'http://localhost/app_manejo/'

  constructor( private http:HttpClient) {}
  
  obtenerTodasLasCarreras(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API}?todasLasCarreras`);
  }

  insertarLaboratorio(laboratorio: any): Observable<any> {
    return this.http.post<any>(`${this.API}/insertarLaboratorio`, laboratorio);
  }
}
