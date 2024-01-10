import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TecnicosService {

  API: string = 'http://localhost/app_manejo/'

  constructor(private http:HttpClient) { }

  insertTec(nombre:string, correo:string,password:string): Observable<any> {
    const datos = {nombre:nombre, correo:correo, password:password}
    return this.http.post(this.API + "?insertarTecnicos", datos);
  }
  
}
