import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { UsuComponent } from './pages/usu/usu.component';
import { CommentsComponent } from './pages/comments/comments.component';
import { CommentsAdminComponent } from './pages/comments-admin/comments-admin.component';
import { LaboratorioComponent } from './laboratorios/laboratorios.component';
import { DeleteLabComponent } from './laboratorios/delete-lab/delete-lab.component';
import { AddLabComponent } from './laboratorios/add-lab/add-lab.component';
import { BienesComponent } from './bienes/bienes.component';
import { AddBienesComponent } from './bienes/add-bienes/add-bienes.component';
import { DeleteBienesComponent } from './bienes/delete-bienes/delete-bienes.component';
import { EditBienesComponent } from './bienes/edit-bienes/edit-bienes.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContPrincipalComponent } from './user/principal/cont-principal/cont-principal.component';
import { MostrarLabComponent } from './user/principal/mostrar-lab/mostrar-lab.component';
import { SidebarUserComponent } from './user/sidebar-user/sidebar-user.component';
import { CarrerasComponent } from './carreras/carreras.component';
import { CrearCarrerasComponent } from './carreras/crear-carreras/crear-carreras.component';
import { EliminarCarreraComponent } from './carreras/eliminar-carrera/eliminar-carrera.component';
import { LabUserComponent } from './user/lab-user/lab-user.component';
import { TareasComponent } from './pages/tareas/tareas.component';
import { TecnicosComponent } from './tecnicos/tecnicos.component';
import { AgregartecComponent } from './tecnicos/agregartec/agregartec.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'usuario/:id', component: UsuComponent },

  {
    path: 'sidebar-user/:id', component: SidebarComponent, children: [
      { path: 'nav-lab/:id', component: LaboratorioComponent },
      { path: 'add-lab/:id', component: AddLabComponent },
      { path: 'delete-lab/:id', component: DeleteLabComponent },
      { path: 'nav-car', component: CarrerasComponent },
      { path: 'crear-car', component: CrearCarrerasComponent },
      { path: 'eliminar-car', component: EliminarCarreraComponent },
      { path: 'nav-tec/:id', component: TecnicosComponent },
      { path: 'add-tec/:id', component: AgregartecComponent},
      

      { path: 'commentAdmin/:id', component: CommentsAdminComponent },
      { path: 'tareas/:id', component: TareasComponent },
      {
        path: 'nav-bienes/:id', component: BienesComponent, children: [
          { path: 'add-bienes/:id', component: AddBienesComponent },
          { path: 'edit-bienes/:id', component: EditBienesComponent },
          { path: 'delete-bienes/:id', component: DeleteBienesComponent },
          { path: '', component: AddBienesComponent }
        ]
      },

    ]
  },
  {
    path: 'sidebar', component: SidebarUserComponent, children: [
      { path: 'principal', component: ContPrincipalComponent },
      { path: 'lab-car', component: MostrarLabComponent },
      { path: 'lab-user/:id', component: LabUserComponent },
      { path: 'comment/:id', component: CommentsComponent },


    ]
  },

  { path: 'nav-lab', component: LaboratorioComponent },
  { path: 'delete-lab', component: DeleteLabComponent },
  { path: 'add-lab', component: AddLabComponent },
  { path: 'sidebar-user', component: SidebarComponent },
  { path: 'principal', component: ContPrincipalComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
