import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoboratoriosServiceService } from '../../../services/loboratorios.service';
import { laboratorioI } from '../../../services/model.laboratorios';

@Component({
  selector: 'app-mostrar-lab',
  templateUrl: './mostrar-lab.component.html',
  styleUrls: ['./mostrar-lab.component.css']
})
export class MostrarLabComponent implements OnInit {

  public idCarrera: number;
  
  public labo: laboratorioI[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private carreraService: LoboratoriosServiceService) { 
    this.idCarrera = 0; 
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.idCarrera = +params['idCarrera'];
      console.log(this.idCarrera);
      this.obtenerLaboratoriosPorCarrera();
    });
  }

  obtenerLaboratoriosPorCarrera() {
    this.carreraService.obtenerLaboratorios2(this.idCarrera.toString()).subscribe(laboratorios => {
        this.labo = laboratorios;
        console.log('Laboratorios:', this.labo);
      },
    );
  }
}