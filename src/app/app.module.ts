import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { DashboardComponent } from './component/dashboard/dashboard.component'
import { HeaderComponent } from './component/header/header.component'
import { FooterComponent } from './component/footer/footer.component'
import { ViewsComponent } from './views/views.component'
import { LoginComponent } from './views/login/login.component'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    ViewsComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
