import { Component } from '@angular/core';
import { CarrerasUniServiceService } from '../../services/carreras-uni.service.service';
import { carrerasI } from '../../services/model.laboratorios';

@Component({
  selector: 'app-eliminar-carrera',
  templateUrl: './eliminar-carrera.component.html',
  styleUrl: './eliminar-carrera.component.css'
})
export class EliminarCarreraComponent {
  public carrera: carrerasI[] = [];

  constructor(private carrerasUService: CarrerasUniServiceService) {}
  
    ngOnInit(): void {
      this.carrerasUService.obtenerTodasLasCarreras().subscribe(
        data => {
          this.carrera = data;
        },
      );
    }

    eliminar(value: any) {
      this.carrerasUService.eliminarCarrera(value.value).subscribe(
        res => {
          this.carrerasUService.obtenerTodasLasCarreras().subscribe(
            data => {
              this.carrera = data;
            },
          );
        }
      );
    }

}
