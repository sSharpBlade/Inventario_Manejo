import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LaboratorioComponent } from './laboratorios/laboratorios.component';
import { MostrarLabComponent } from './laboratorios/mostrar-lab/mostrar-lab.component';
import { AddLabComponent } from './laboratorios/add-lab/add-lab.component';
import { DeleteLabComponent } from './laboratorios/delete-lab/delete-lab.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent, 
    LaboratorioComponent, MostrarLabComponent, AddLabComponent, DeleteLabComponent, SidebarComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
