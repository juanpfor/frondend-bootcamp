import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { DashboardComponent } from './component/dashboard/dashboard.component'
import { HeaderComponent } from './component/header/header.component'
import { FooterComponent } from './component/footer/footer.component'
import { ViewsComponent } from './views/views.component'
import { LoginComponent } from './views/login/login.component';
import { ListarEspecieComponent } from './views/Especies/listar-especie/listar-especie.component';
import { ActualizarEspecieComponent } from './views/Especies/actualizar-especie/actualizar-especie.component';
import { ListarMunicipioComponent } from './views/Municipios/listar-municipio/listar-municipio.component';
import {GestionarRequerimientoAnimalComponent} from './views/requerimiento-animal/gestionar-requerimiento-animal/gestionar-requerimiento-animal.component'
import { AsideComponent } from './views/aside/aside.component';
<<<<<<< HEAD
import { NavbarComponent } from './component/navbar/navbar.component';
import { AllusersComponent } from './views/users/allusers/allusers.component';

=======
import { NavbarComponent } from './component/navbar/navbar.component'
import { RouterModule } from '@angular/router';
import { DetallesRequerimientoAnimalComponent } from './views/requerimiento-animal/detalles-requerimiento-animal/detalles-requerimiento-animal.component';
import { GestionarComponent } from './views/nutrientes/gestionar/gestionar.component';
import { RegistroComponent } from './views/nutrientes/registro/registro.component';
>>>>>>> a311e1dacfed10e5961a40b86b0f82f3c265d4b7

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    ViewsComponent,
    LoginComponent,
    ListarEspecieComponent,
    ActualizarEspecieComponent,
    ListarMunicipioComponent,
    AsideComponent,
    NavbarComponent,
<<<<<<< HEAD
    AllusersComponent
=======
    GestionarRequerimientoAnimalComponent,
    DetallesRequerimientoAnimalComponent,
    ActualizarEspecieComponent,
    GestionarComponent,
    RegistroComponent
>>>>>>> a311e1dacfed10e5961a40b86b0f82f3c265d4b7
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule ,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
