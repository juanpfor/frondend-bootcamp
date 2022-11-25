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
// import { NavbarComponent } from './component/navbar/navbar.component'
import { NavbarComponent } from './component/navbar/navbar.component';
import { AllusersComponent } from './views/users/allusers/allusers.component';
import { RouterModule } from '@angular/router';
import { GestionarComponent } from './views/nutrientes/gestionar/gestionar.component';
import { RegistroComponent } from './views/nutrientes/registro/registro.component';

// import { NavbarComponent } from './component/navbar/navbar.component'

import { GestionarAlimentoComponent } from './views/alimentos/gestionar-alimento/gestionar-alimento.component';
import { DetalleAlimentoComponent } from './views/alimentos/detalle-alimento/detalle-alimento.component';
import { RegistroAlimentoComponent } from './views/alimentos/registro-alimento/registro-alimento.component';
import { GestionarZonasComponent } from './views/zonas/gestionar-zonas/gestionar-zonas.component';
import { RegistrarZonasComponent } from './views/zonas/registrar-zonas/registrar-zonas.component';
import { RegistroUsersComponent } from './views/users/registro-users/registro-users.component';
import { ActualizarAlimentoComponent } from './views/alimentos/actualizar-alimento/actualizar-alimento.component';


import { RegistrarRequerimientoAnimalComponent } from './views/requerimiento-animal/registrar-requerimiento-animal/registrar-requerimiento-animal.component';
import { AdminHomeComponent } from './views/admin-home/admin-home.component';
import { PerfilUsuarioComponent } from './views/perfil-usuario/perfil-usuario.component';
import { RegistrarEspeciesComponent } from './views/Especies/registrar-especies/registrar-especies.component';
import { DetallesRequerimientoAnimalComponent } from './views/requerimiento-animal/detalles-requerimiento-animal/detalles-requerimiento-animal.component';

import { HomeComponent } from './views/home/home.component';

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
    GestionarRequerimientoAnimalComponent,
    RegistrarRequerimientoAnimalComponent,
    DetallesRequerimientoAnimalComponent,
    GestionarAlimentoComponent,
    GestionarComponent,
    RegistroComponent,
    DetalleAlimentoComponent,
    RegistroAlimentoComponent,
    GestionarZonasComponent,
    RegistrarZonasComponent,
    RegistroUsersComponent,
    ActualizarAlimentoComponent,
    AdminHomeComponent,
    PerfilUsuarioComponent,
    RegistrarEspeciesComponent,
    RegistrarRequerimientoAnimalComponent ,
    AllusersComponent,
    HomeComponent
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
