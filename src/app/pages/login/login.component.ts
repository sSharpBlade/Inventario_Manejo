import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit {

  formularioRegistro: FormGroup;
  formularioLogin: FormGroup;

  constructor(public formulario: FormBuilder, private loginService: LoginService, private router: Router) {
    this.formularioRegistro = this.formulario.group({
      nombre: [''],
      correo: [''],
      password: ['']
    });

    this.formularioLogin = this.formulario.group({
      correo: [''],
      password: ['']
    });
  }

  ngOnInit(): void {
    this.cambio();
  }

  public registrarDatos(): any {
    this.loginService.agregarUsuario(this.formularioRegistro.value).subscribe();
    window.location.reload();
  }

  public iniciarSesion(): void {
    const { correo, password } = this.formularioLogin.value;
    this.loginService.autenticarUsuario(correo, password).subscribe(
      respuesta => {
        if (respuesta && respuesta.success) {
          const id = respuesta.id;
          const rol = respuesta.rol;
          console.log(`Usuario autenticado. ID: ${id}, Rol: ${rol}`);
          if (rol === 'lab') {
            this.router.navigate(['/laboratorio']);
          } else if (rol === 'usuario') {
            this.router.navigate(['/sidebar']);
          } else if (rol === 'admin') {
            this.router.navigate(['/sidebar-user', id]);
          } else {
            this.router.navigate(['']);
          }
        } else {
          console.log("No esta registrado");
        }
      }
    );
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
