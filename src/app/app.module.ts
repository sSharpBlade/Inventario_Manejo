import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LaboratorioComponent } from './laboratorios/laboratorios.component';
import { AddLabComponent } from './laboratorios/add-lab/add-lab.component';
import { DeleteLabComponent } from './laboratorios/delete-lab/delete-lab.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CarrerasComponent } from './carreras/carreras.component';
import { CrearCarrerasComponent } from './carreras/crear-carreras/crear-carreras.component';
import { SidebarUserComponent } from './user/sidebar-user/sidebar-user.component';
import { ContPrincipalComponent } from './user/principal/cont-principal/cont-principal.component';
import { EliminarCarreraComponent } from './carreras/eliminar-carrera/eliminar-carrera.component';

@NgModule({
  declarations: [
    AppComponent, 
    LaboratorioComponent, AddLabComponent, DeleteLabComponent, SidebarComponent, CarrerasComponent, CrearCarrerasComponent, SidebarUserComponent, ContPrincipalComponent, EliminarCarreraComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }