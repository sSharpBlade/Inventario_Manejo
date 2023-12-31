import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaboratorioComponent } from './laboratorios/laboratorios.component';
import { DeleteLabComponent } from './laboratorios/delete-lab/delete-lab.component';
import { AddLabComponent } from './laboratorios/add-lab/add-lab.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContPrincipalComponent } from './user/principal/cont-principal/cont-principal.component';
import { MostrarLabComponent } from './user/principal/mostrar-lab/mostrar-lab.component';


const routes: Routes = [
  
  {path: 'nav-lab', component: LaboratorioComponent},
  {path: 'delete-lab', component: DeleteLabComponent},
  {path: 'add-lab', component: AddLabComponent},
  {path: 'sidebar-user', component: SidebarComponent},
  {path: 'principal', component: ContPrincipalComponent },
  {path: 'lab-car', component:MostrarLabComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
