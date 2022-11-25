import { RegistrarEspeciesComponent } from './views/Especies/registrar-especies/registrar-especies.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { VigilantGuard } from './Guards/vigilant.guard';
import { ListarEspecieComponent } from './views/Especies/listar-especie/listar-especie.component';
import { ActualizarEspecieComponent } from './views/Especies/actualizar-especie/actualizar-especie.component';
import { AllusersComponent } from './views/users/allusers/allusers.component';
import { ListarMunicipioComponent } from './views/Municipios/listar-municipio/listar-municipio.component';
import { GestionarAlimentoComponent } from './views/alimentos/gestionar-alimento/gestionar-alimento.component';
import { ActualizarAlimentoComponent } from './views/alimentos/actualizar-alimento/actualizar-alimento.component';
import { RegistroAlimentoComponent } from './views/alimentos/registro-alimento/registro-alimento.component';
import { HomeComponent } from './views/home/home.component';
import { GestionarRequerimientoAnimalComponent } from './views/requerimiento-animal/gestionar-requerimiento-animal/gestionar-requerimiento-animal.component';
import { RegistrarRequerimientoAnimalComponent } from './views/requerimiento-animal/registrar-requerimiento-animal/registrar-requerimiento-animal.component';
import { ActualizarRequerimientoAnimalComponent } from './views/requerimiento-animal/actualizar-requerimiento-animal/actualizar-requerimiento-animal.component';
import { GestionarComponent } from './views/nutrientes/gestionar/gestionar.component';
import { RegistroComponent } from './views/nutrientes/registro/registro.component';
import { AdminHomeComponent } from './views/admin-home/admin-home.component';
import { PerfilUsuarioComponent } from './views/perfil-usuario/perfil-usuario.component';
import { RegistroUsersComponent } from './views/users/registro-users/registro-users.component';
const routes: Routes = [



    // ///////////////////// Admin Home ///////////////////////

  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'adminHome', component: AdminHomeComponent},

    // ///////////////////// Landing ///////////////////////


  {path: 'landing', component: HomeComponent},

    // /////////////////////Login///////////////////////


  { path: 'login', component: LoginComponent },


    // /////////////////////Dashboard///////////////////////

  { path: 'dashboard', component: DashboardComponent, canActivate: [VigilantGuard],

  // children: [
    //   {
    //     // path: 'login', childrens
    //     // component: LoginComponent,
    //   }
    // ]


  },


  // /////////////////////Alimentos///////////////////////
  {
    path: 'alimentos',
    component: GestionarAlimentoComponent,
  },
  {
    path: 'alimentos/actualizar',
    component: ActualizarAlimentoComponent,
  },
  {
    path: 'alimentos/registro',
    component: RegistroAlimentoComponent,
  },



  // /////////////////////Especie///////////////////////


  {
    path: 'especie',
    component: ListarEspecieComponent,
  },
  {
    path: 'especie/registrar',
    component: RegistrarEspeciesComponent,
  },
  {
    path: 'especie/actualizar/:id_especie',
    component: ActualizarEspecieComponent,
  },

  // /////////////////////Municipios///////////////////////

  {
    path: 'municipios',
    component: ListarMunicipioComponent,
  },

  // /////////////////////Animal///////////////////////


  {
    path: 'gestionarAnimal',
    component: GestionarRequerimientoAnimalComponent,
  },
  {
    path: 'gestionarAnimal/registrar',
    component: RegistrarRequerimientoAnimalComponent,
  },

  {
    path: 'gestionarAnimal/actualizar',
    component: ActualizarRequerimientoAnimalComponent,
  },


  // /////////////////////Nutrientes///////////////////////


 {
    path: 'nutrientes',
    component: GestionarComponent,
  },

  {
    path: 'nutrientes/registro',
    component: RegistroComponent,
  },


  // /////////////////////Users///////////////////////

  {
    path: 'usuarios',
    component: AllusersComponent,
  },


  {
    path: 'perfilUsuario',
    component: PerfilUsuarioComponent,
  },

  {
    path:'usuarios/registrar',
    component: RegistroUsersComponent
  }





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
