import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { CommentsComponent } from './pages/comments/comments.component';
import { CommentsAdminComponent } from './pages/comments-admin/comments-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';
import { UsuComponent } from './pages/usu/usu.component';
import { LabComponent } from './pages/lab/lab.component';
import { AdminComponent } from './pages/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsuComponent,
    LabComponent,
    AdminComponent,
    CommentsComponent,
    CommentsAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideHttpClient()
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
