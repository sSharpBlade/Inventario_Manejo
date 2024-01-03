import { Component } from '@angular/core';
import { LoboratoriosServiceService } from '../../../services/loboratorios.service';
import { carrerasI } from '../../../services/model.laboratorios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cont-principal',
  templateUrl: './cont-principal.component.html',
  styleUrl: './cont-principal.component.css'
})
export class ContPrincipalComponent {
  public car:carrerasI[] = [];

  constructor( private router: Router,private LoboratoriosService: LoboratoriosServiceService) {} 

  ngOnInit(): void {
    this.LoboratoriosService.obtenerTodasLasCarreras().subscribe(
      data => {
        this.car = data;
      },
    );
  }
  
  verLaboratorios(idCarrera: number) {
    console.log(`Ver laboratorios de la carrera con ID ${idCarrera}`);
  }
  callComment(value: any) {
    console.log(value.value);
    this.router.navigate(['/sidebar/lab-user', value.value]);
  }
}
