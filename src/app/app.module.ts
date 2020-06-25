import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';

// Rutas - Rutes
import { APP_ROUTES } from './app.routes';

// Módulos - Modules
import { PagesModule } from './pages/pages.module';
import { FormsModule } from '@angular/forms';

// Componentes - Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './login/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Servicios - Services
import { ServiceModule } from './services/service.module';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    BrowserAnimationsModule,
    FormsModule,
    SharedModule,
    ServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
