import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Departement } from '../departement';
import { DepartementService } from '../departement.service';
import { Employe } from '../employe';
import { EmployeService } from '../employe.service';

@Component({
  selector: 'app-create-employe',
  templateUrl: './create-employe.component.html',
  styleUrls: ['./create-employe.component.scss'],
})
export class CreateEmployeComponent implements OnInit {
  employe: Employe = new Employe();
  departements: Observable<Departement[]>;
  

  constructor(
    private employeService:EmployeService,
    private departementService:DepartementService,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    private router:Router,
  ) { }

  ngOnInit() {
    this.getAllDepartement();
  }

  async onSave(){
    this.employeService.create(this.employe)
    .subscribe(data =>console.log(data),
    error =>console.log(error));
    this.employe = new Employe();
    const loader = await this.loadingCtrl.create({
      duration:2000
    });

    loader.present();
    loader.onWillDismiss().then(async l =>{
      const toast = await this.toastCtrl.create({
        message: 'Employé enregistré avec succès',
        duration : 2000

      });

      toast.present();
    })
    this.router.navigateByUrl('/employe');
  }

  getAllDepartement(){
    this.departements=this.departementService.getAll();
  }

}
