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
const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [VigilantGuard],
  
  // children: [
    //   {
    //     // path: 'login', childrens
    //     // component: LoginComponent,
    //   }
    // ]
  },
  {
    path: 'listarEspecie',
    component: ListarEspecieComponent,
  },
  {
    path: 'actualizarEspecie',
    component: ActualizarEspecieComponent,
  },
  {
    path: 'listarMunicipios',
    component: ListarMunicipioComponent,
  },
  
  {
    path: 'alimentos',
    component: GestionarAlimentoComponent,
  },
  {
    path: 'alimentos/actualizar',
    component: ActualizarAlimentoComponent,
  },
  {
    path: 'Allusers',
    component: AllusersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
