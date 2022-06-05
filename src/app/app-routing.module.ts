import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DepartementComponent } from './departement/departement.component';
import { CreateDepartementComponent } from './create-departement/create-departement.component';
import { UpdateDepartementComponent } from './update-departement/update-departement.component';
import { HomeComponent } from './home/home.component';
import { EmployeComponent } from './employe/employe.component';
import { CreateEmployeComponent } from './create-employe/create-employe.component';
import { UpdateEmployeComponent } from './update-employe/update-employe.component';
import { DetailsEmployeComponent } from './details-employe/details-employe.component';
import { FormationComponent } from './formation/formation.component';
import { CreateFormationComponent } from './create-formation/create-formation.component';
import { UpdateFormationComponent } from './update-formation/update-formation.component';
import { DetailsFormationComponent } from './details-formation/details-formation.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'departement', component: DepartementComponent },
  { path: 'create-departement', component: CreateDepartementComponent },
  { path: 'edit-departement/:id', component: UpdateDepartementComponent },
  { path: 'employe', component: EmployeComponent },
  { path: 'create-employe', component: CreateEmployeComponent},
  { path: 'edit-employe/:id', component: UpdateEmployeComponent},
  { path: 'details-employe/:id', component: DetailsEmployeComponent},
  { path: 'formation', component: FormationComponent},
  { path: 'create-formation', component: CreateFormationComponent},
  { path: 'edit-formation/:id', component: UpdateFormationComponent},
  { path: 'details-formation/:id', component: DetailsFormationComponent}
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
