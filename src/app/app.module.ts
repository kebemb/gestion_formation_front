import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartementComponent } from './departement/departement.component';
import { CreateDepartementComponent } from './create-departement/create-departement.component';
import { UpdateDepartementComponent } from './update-departement/update-departement.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { EmployeComponent } from './employe/employe.component';
import { CreateEmployeComponent } from './create-employe/create-employe.component';
import { UpdateEmployeComponent } from './update-employe/update-employe.component';
import { DetailsEmployeComponent } from './details-employe/details-employe.component';
import { CreateFormationComponent } from './create-formation/create-formation.component';
import { UpdateFormationComponent } from './update-formation/update-formation.component';
import { FormationComponent } from './formation/formation.component';
import { DetailsFormationComponent } from './details-formation/details-formation.component';


@NgModule({
  declarations: [
    AppComponent, 
    DepartementComponent, 
    CreateDepartementComponent, 
    UpdateDepartementComponent,
    HomeComponent,
    EmployeComponent,
    CreateEmployeComponent,
    UpdateEmployeComponent,
    DetailsEmployeComponent,
    FormationComponent,
    CreateFormationComponent,
    UpdateFormationComponent,
    DetailsFormationComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    SplashScreen,
    StatusBar,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
