import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Employe } from '../employe';
import { EmployeService } from '../employe.service';
import { Formation } from '../formation';
import { FormationService } from '../formation.service';

@Component({
  selector: 'app-update-formation',
  templateUrl: './update-formation.component.html',
  styleUrls: ['./update-formation.component.scss'],
})
export class UpdateFormationComponent implements OnInit {

  id:string;
  formation:Formation;
  employes: Observable<Employe[]>;
  constructor(
    private formationService:FormationService,
    private employeService:EmployeService,
    private route: ActivatedRoute,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public router: Router
  ) { }

  ngOnInit() {
    this.formation = new Formation();
    this.id = this.route.snapshot.params['id'];
    this.formationService.getOne(this.id)
    .subscribe(data => {this.formation = data});
    this.getAllEmployes();
  }

  async update(){
    this.formationService.update(this.id,this.formation)
    .subscribe(data =>console.log(data), error => console.log(error));
    
    const loader = await this.loadingCtrl.create({
      duration: 2000
    });

    loader.present();
    loader.onWillDismiss().then(async l => {
      const toast = await this.toastCtrl.create({
        message: 'Modification éffectuée avec succès',
        duration: 2000
      });

      toast.present();
    });

    this.router.navigateByUrl('/formation');
  }

  getAllEmployes(){
    this.employes=this.employeService.getAll();
  }

}
