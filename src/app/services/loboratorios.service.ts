import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { carrerasI, laboratorioI , userI} from './model.laboratorios';

@Injectable({
  providedIn: 'root'
})
export class LoboratoriosServiceService {

  API: string = 'http://localhost/app_manejo/'

  constructor( private http:HttpClient) {}
  
  obtenerTodasLasCarreras(): Observable<carrerasI[]> {
    return this.http.post<carrerasI[]>(this.API + "?todasLasCarreras",'');
  }

  insertLab(nom_lab:string, ubi_lab:string,cap_mes_lab:string, id_car_lab: string): Observable<any> {
    const datos = {nom_lab:nom_lab, ubi_lab:ubi_lab, cap_mes_lab:cap_mes_lab,id_car_lab:id_car_lab }
    return this.http.post(this.API + "?insertarLaboratorios", datos);
  }

  obtenerLaboratorios(): Observable<laboratorioI[]> {
    return this.http.post<laboratorioI[]>(this.API + "?laboratoriosCreados",'');
  }

  eliminarLaboratorio(id: string): Observable<any> {
    const valor = { id: id };
    return this.http.post(this.API + "?eliminarLaboratorio", valor);
  }

  obtenerLaboratoriosPorCarrera(idCarrera: number): Observable<any> {
    const url = `${this.API}?laboDeCarreras`;
    const datos = { idCar: idCarrera };
    return this.http.post(url, JSON.stringify(datos));
  }
  obtenerLaboratorios2(idCar: string): Observable<laboratorioI[]> {
    const datos = { idCar: idCar };
    return this.http.post<laboratorioI[]>(this.API + "?laboratoriosC",datos);}

    obtenerUsuarioLab(): Observable<userI[]> {
      return this.http.post<userI[]>(this.API + "?obtenerUsuariosRolLab",'');
    }

}
