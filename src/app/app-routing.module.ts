import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LabComponent } from './pages/lab/lab.component';
import { UsuComponent } from './pages/usu/usu.component';
import { AdminComponent } from './pages/admin/admin.component';
import { CommentsComponent } from './pages/comments/comments.component';
import { CommentsAdminComponent } from './pages/comments-admin/comments-admin.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'laboratorio/:id', component: LabComponent },
  { path: 'usuario/:id', component: UsuComponent },
  { path: 'admin/:id', component: AdminComponent },
  { path: 'comment/:id', component: CommentsComponent },
  { path: 'commentAdmin/:id', component: CommentsAdminComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
