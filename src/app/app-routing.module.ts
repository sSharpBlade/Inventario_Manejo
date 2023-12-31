import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaboratorioComponent } from './laboratorios/laboratorios.component';
import { DeleteLabComponent } from './laboratorios/delete-lab/delete-lab.component';
import { AddLabComponent } from './laboratorios/add-lab/add-lab.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContPrincipalComponent } from './user/principal/cont-principal/cont-principal.component';

import { CarrerasComponent } from './carreras/carreras.component';
import { CrearCarrerasComponent } from './carreras/crear-carreras/crear-carreras.component';
import { EliminarCarreraComponent } from './carreras/eliminar-carrera/eliminar-carrera.component';


const routes: Routes = [
  {path: 'nav-lab', component: LaboratorioComponent},
  {path: 'delete-lab', component: DeleteLabComponent},
  {path: 'add-lab', component: AddLabComponent},
  {path: 'sidebar-user', component: SidebarComponent},
  {path: 'principal', component: ContPrincipalComponent },

  {path: 'nav-car', component: CarrerasComponent},
  {path: 'crear-car', component: CrearCarrerasComponent},
  {path: 'eliminar-car', component: EliminarCarreraComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
