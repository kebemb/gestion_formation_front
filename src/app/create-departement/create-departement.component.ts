import { Component, OnInit } from '@angular/core';
import { MenuController, LoadingController, ToastController, AlertController } from '@ionic/angular';
import { DepartementService } from '../departement.service';
import { Router } from '@angular/router';
import { Departement } from '../departement';

@Component({
  selector: 'app-create-departement',
  templateUrl: './create-departement.component.html',
  styleUrls: ['./create-departement.component.scss'],
})
export class CreateDepartementComponent implements OnInit {
  departement: Departement = new Departement();
  submitted = false;

  constructor(
    public menuCtrl: MenuController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private departementService:DepartementService,
    public alertController: AlertController,
    private router: Router,
  ) { }
  ngOnInit() {
  }
  
  async onSave(){
    this.departementService.create(this.departement)
        .subscribe(data =>console.log(data),
          error =>console.log(error));
          this.departement = new Departement();
          const loader = await this.loadingCtrl.create({
            duration: 2000
          });
      
          loader.present();
          loader.onWillDismiss().then(async l => {
            const toast = await this.toastCtrl.create({
              message: 'Données sauvegard avec succès',
              duration: 2000
            });
      
            toast.present();
          });
  }


  onSubmit() {
    this.onSave();    
  }
  goList(){
    return this.router.navigateByUrl('/departement');
  }
}
