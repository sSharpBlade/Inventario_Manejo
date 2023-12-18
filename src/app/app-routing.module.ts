import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './pages/sidebar/sidebar.component';

const routes: Routes = [
  { path: 'sidebar', component: SidebarComponent },
  { path: '', redirectTo: '/sidebar', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
