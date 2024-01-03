import { Component } from '@angular/core';
import { LoboratoriosServiceService } from '../../services/loboratorios.service';
import { laboratorioI } from '../../services/model.laboratorios';
import { ActivatedRoute, Router } from '@angular/router';
import { Observer } from 'rxjs';


@Component({
  selector: 'app-lab-user',
  templateUrl: './lab-user.component.html',
  styleUrl: './lab-user.component.css'
})
export class LabUserComponent {
  idCar: any;
  public labo: laboratorioI[] = [];

  constructor(private route: ActivatedRoute,private loboratoriosService: LoboratoriosServiceService, private router: Router) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.idCar = params['id'];
    });

    this.loboratoriosService.obtenerLaboratorios2(this.idCar).subscribe(respuesta => {
      this.labo = respuesta;
      console.log('Laboratorios:', this.labo); 
  });

    
  }

 

  eliminar(value: any) {
    this.loboratoriosService.eliminarLaboratorio(value.value).subscribe(
      res => {
        this.loboratoriosService.obtenerLaboratorios().subscribe(
          data => {
            this.labo = data;
          },
        );
      }
    );
  }

  callComment(value: any) {
    this.router.navigate(['/sidebar/comment', value.value]);
  }

}
