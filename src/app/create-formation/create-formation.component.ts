import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Employe } from '../employe';
import { EmployeService } from '../employe.service';
import { Formation } from '../formation';
import { FormationService } from '../formation.service';

@Component({
  selector: 'app-create-formation',
  templateUrl: './create-formation.component.html',
  styleUrls: ['./create-formation.component.scss'],
})
export class CreateFormationComponent implements OnInit {

  formation: Formation = new Formation();
  employes: Observable<Employe[]>;

  constructor(
    private employeService:EmployeService,
    private formationService:FormationService,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    private router:Router,
  ) { }

  ngOnInit() {
    this.getAllEmployes();
  }

  async onSave(){
    this.formationService.create(this.formation)
    .subscribe(data =>console.log(data),
    error =>console.log(error));
    this.formation = new Formation();
    const loader = await this.loadingCtrl.create({
      duration:2000
    });

    loader.present();
    loader.onWillDismiss().then(async l =>{
      const toast = await this.toastCtrl.create({
        message: 'Formation enregistrée avec succès',
        duration : 2000

      });

      toast.present();
    })
    this.router.navigateByUrl('/formation');
  }

  getAllEmployes(){
    this.employes=this.employeService.getAll();
  }

}
