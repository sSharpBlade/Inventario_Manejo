import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MostrarLabComponent } from './laboratorios/mostrar-lab/mostrar-lab.component';
import { DeleteLabComponent } from './laboratorios/delete-lab/delete-lab.component';
import { AddLabComponent } from './laboratorios/add-lab/add-lab.component';

const routes: Routes = [
  {path: 'mostrar-lab', component: MostrarLabComponent},
  {path: 'delete-lab', component: DeleteLabComponent},
  {path: 'add-lab', component: AddLabComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
