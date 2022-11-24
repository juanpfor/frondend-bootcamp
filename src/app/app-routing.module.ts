import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { VigilantGuard } from './Guards/vigilant.guard';
import { ListarEspecieComponent } from './views/Especies/listar-especie/listar-especie.component';
import { ActualizarEspecieComponent } from './views/Especies/actualizar-especie/actualizar-especie.component';
const routes: Routes = [
  { path: "", redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate : [ VigilantGuard ] ,
    // children: [
    //   {
    //     // path: 'login', childrens
    //     // component: LoginComponent,
    //   }
    // ]
  },
  {
    path: 'listarEspecie',
    component:ListarEspecieComponent
  },
  {
    path: 'actualizarEspecie',
    component: ActualizarEspecieComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
