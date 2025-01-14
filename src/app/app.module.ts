import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router'; 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AddbikeComponent } from './components/profile/garage/addbike/addbike.component';
import { ViewbikeComponent } from './components/profile/garage/viewbike/viewbike.component';
import { HomeComponent } from './components/home/home.component';
import { UpdatebikeComponent } from './components/profile/garage/updatebike/updatebike.component';
import { CaruselComponent } from './components/profile/carusel/carusel.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignupComponent } from './components/signup/signup.component';
import { ReactiveFormsModule }  from '@angular/forms';
import { LoginComponent } from './components/login/login.component';





@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    AddbikeComponent,
    ViewbikeComponent,
    HomeComponent,
    UpdatebikeComponent,
    CaruselComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
