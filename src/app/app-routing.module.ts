import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaboratorioComponent } from './laboratorios/laboratorios.component';
import { DeleteLabComponent } from './laboratorios/delete-lab/delete-lab.component';
import { AddLabComponent } from './laboratorios/add-lab/add-lab.component';
import { BienesComponent } from './bienes/bienes.component';
import { AddBienesComponent } from './bienes/add-bienes/add-bienes.component';
import { DeleteBienesComponent } from './bienes/delete-bienes/delete-bienes.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EditBienesComponent } from './bienes/edit-bienes/edit-bienes.component';


const routes: Routes = [
  {path: 'side-bar', component: SidebarComponent},
  {path: 'nav-lab', component: LaboratorioComponent},
  {path: 'delete-lab', component: DeleteLabComponent},
  {path: 'add-lab', component: AddLabComponent},
  {path: 'nav-bienes', component: BienesComponent, children: [
    {path: 'add-bienes', component: AddBienesComponent},
  {path: 'edit-bienes', component: EditBienesComponent},
  {path: 'delete-bienes', component: DeleteBienesComponent},
  {path: '',component: AddBienesComponent}
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
