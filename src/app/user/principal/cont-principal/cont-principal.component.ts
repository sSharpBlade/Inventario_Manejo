import { Component } from '@angular/core';
import { LoboratoriosServiceService } from '../../../services/loboratorios.service';
import { carrerasI } from '../../../services/model.laboratorios';

@Component({
  selector: 'app-cont-principal',
  templateUrl: './cont-principal.component.html',
  styleUrl: './cont-principal.component.css'
})
export class ContPrincipalComponent {
  public car:carrerasI[] = [];

  constructor( private LoboratoriosService: LoboratoriosServiceService) {} 

  ngOnInit(): void {
    this.LoboratoriosService.obtenerTodasLasCarreras().subscribe(
      data => {
        this.car = data;
      },
    );
  }

}
