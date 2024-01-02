import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { UsuComponent } from './pages/usu/usu.component';
import { CommentsComponent } from './pages/comments/comments.component';
import { CommentsAdminComponent } from './pages/comments-admin/comments-admin.component';
import { LaboratorioComponent } from './laboratorios/laboratorios.component';
import { DeleteLabComponent } from './laboratorios/delete-lab/delete-lab.component';
import { AddLabComponent } from './laboratorios/add-lab/add-lab.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContPrincipalComponent } from './user/principal/cont-principal/cont-principal.component';
import { MostrarLabComponent } from './user/principal/mostrar-lab/mostrar-lab.component';
import { SidebarUserComponent } from './user/sidebar-user/sidebar-user.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'usuario/:id', component: UsuComponent },
  { path: 'comment/:id', component: CommentsComponent },
  { path: 'commentAdmin/:id', component: CommentsAdminComponent },

  { path: 'sidebar-user', component: SidebarComponent, children: [
    { path: 'nav-lab', component: LaboratorioComponent },
    { path: 'add-lab', component: AddLabComponent },
    { path: 'delete-lab', component: DeleteLabComponent },
  ]},
  { path: 'sidebar', component: SidebarUserComponent, children: [
    { path: 'principal', component: ContPrincipalComponent },
    { path: 'lab-car', component: MostrarLabComponent },
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
