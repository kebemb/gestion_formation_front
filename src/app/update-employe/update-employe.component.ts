import { Component, OnInit } from '@angular/core';
import { Employe } from '../employe';
import { EmployeService } from '../employe.service';
import { Departement } from '../departement';
import { DepartementService } from '../departement.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-update-employe',
  templateUrl: './update-employe.component.html',
  styleUrls: ['./update-employe.component.scss'],
})
export class UpdateEmployeComponent implements OnInit {
  id:string;
  employe : Employe;
  departements: Observable<Departement[]>;

  constructor(
    private employeService: EmployeService,
    private departementService:DepartementService,
    private route: ActivatedRoute,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public router: Router
  ) { }

  ngOnInit() {
    this.employe = new Employe();
    this.id = this.route.snapshot.params['id'];
    this.employeService.getOne(this.id)
    .subscribe(data => {this.employe = data});
    this.getAllDepartement();
  }

  async update(){
    this.employeService.update(this.id,this.employe)
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

    this.router.navigateByUrl('/employe');
  }

  getAllDepartement(){
    this.departements=this.departementService.getAll();
  }
}
