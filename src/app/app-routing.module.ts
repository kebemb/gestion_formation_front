import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DepartementComponent } from './departement/departement.component';
import { CreateDepartementComponent } from './create-departement/create-departement.component';
import { UpdateDepartementComponent } from './update-departement/update-departement.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'departement', component: DepartementComponent },
  { path: 'create-departement', component: CreateDepartementComponent },
  { path: 'edit-departement/:id', component: UpdateDepartementComponent },
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
