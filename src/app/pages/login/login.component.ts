import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit {

  ngOnInit(): void {
    this.cambio();
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
