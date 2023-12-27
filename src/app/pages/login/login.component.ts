import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LoginService } from '../../services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit {

  formularioRegistro: FormGroup;

  constructor(public formulario: FormBuilder, private loginService: LoginService) {
    this.formularioRegistro = this.formulario.group({
      nombre: [''],
      correo: [''],
      password: ['']
    });
  }

  ngOnInit(): void {
    this.cambio();
  }

  public registrarDatos(): any {
    console.log("Hola mundo");
    console.log(this.formularioRegistro.value);
    this.loginService.agregarUsuario(this.formularioRegistro.value).subscribe();
  }

  private cambio() {
    if (typeof document !== 'undefined') {
      const logregBox = document.querySelector('.login');
      const loginLink = document.querySelector('.iniciar-enlace');
      const registerLink = document.querySelector('.registrar-enlace');

      registerLink?.addEventListener('click', () => {
        logregBox?.classList.add('active');
      });

      loginLink?.addEventListener('click', () => {
        logregBox?.classList.remove('active');
      });
    }
  }

}
