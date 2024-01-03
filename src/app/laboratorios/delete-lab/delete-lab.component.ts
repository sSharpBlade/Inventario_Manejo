import { Component } from '@angular/core';
import { LoboratoriosServiceService } from '../../services/loboratorios.service';
import { laboratorioI } from '../../services/model.laboratorios';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-lab',
  templateUrl: './delete-lab.component.html',
  styleUrl: './delete-lab.component.css'
})
export class DeleteLabComponent {
  public labo: laboratorioI[] = [];

  constructor(private loboratoriosService: LoboratoriosServiceService, private router: Router) { }

  ngOnInit(): void {
    this.loboratoriosService.obtenerLaboratorios().subscribe(
      data => {
        this.labo = data;
      },
    );
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
    this.router.navigate(['/sidebar-user/commentAdmin', value.value]);
  }

}