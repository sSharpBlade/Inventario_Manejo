import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { usuario } from './usuarios';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  API: string = 'http://localhost/app_manejo/';

  constructor(private clienteHttp: HttpClient) { }

  agregarUsuario(datosUsuario: usuario): Observable<any> {
    return this.clienteHttp.post(this.API + "?insertar=1", datosUsuario);
  }

   autenticarUsuario(correo: string, password: string): Observable<any> {
    const datosLogin = { correo, password };
    return this.clienteHttp.post(this.API + "?consulta=1", datosLogin);
  }

}
