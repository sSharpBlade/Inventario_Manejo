import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LaboratorioComponent } from './laboratorios/laboratorios.component';
import { AddLabComponent } from './laboratorios/add-lab/add-lab.component';
import { DeleteLabComponent } from './laboratorios/delete-lab/delete-lab.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CarrerasComponent } from './carreras/carreras.component';
import { CrearCarrerasComponent } from './carreras/crear-carreras/crear-carreras.component';
import { BienesComponent } from './bienes/bienes.component';
import { AddBienesComponent } from './bienes/add-bienes/add-bienes.component';
import { DeleteBienesComponent } from './bienes/delete-bienes/delete-bienes.component';
import { EditBienesComponent } from './bienes/edit-bienes/edit-bienes.component';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent, 
    LaboratorioComponent, AddLabComponent, DeleteLabComponent, SidebarComponent, CarrerasComponent, CrearCarrerasComponent, BienesComponent, AddBienesComponent, DeleteBienesComponent, EditBienesComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
