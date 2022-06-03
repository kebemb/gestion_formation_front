import { Component, OnInit } from '@angular/core';
import { DepartementService } from '../departement.service';
import { Departement } from '../departement';
import { Router } from '@angular/router';
import { 
  NavController,
  AlertController,
  MenuController,
  ToastController, 
  LoadingController
} from '@ionic/angular';

@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.scss'],
})
export class DepartementComponent implements OnInit {

  departements: Departement [] = [];
  constructor(
    private departementService: DepartementService,
    private router: Router,
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController, 
    public loadingCtrl: LoadingController,
    public alertController: AlertController
    ) { }

  ngOnInit() {
    this.getListeDepartement();
  }

  edit(id:string){
    this.router.navigate(['edit-departement',id]);
  }
  getListeDepartement() {
    this.departementService.getAll().subscribe((data: Departement[]) => {
      this.departements = data;
    });
  }
  create(){
    this.router.navigate(['create-departement']);
  }
  async delete(id: string) {
    this.departementService.delete(id)
      .subscribe(
        data => {
          console.log(data);
          this.getListeDepartement();
        },
        error => console.log(error));
        const alert = await this.alertController.create({
          header: 'Supprimer!',
          message: 'Voullez vous vraiment supprimer?',
          buttons: [
              {
                  text: 'Annuler',
                  role: 'cancel',
                  cssClass: 'secondary',
                  handler: (blah) => {
                  }
              }, {
                  text: 'Supprimer',
                  handler: () => {
                      this.deleteMessage();
                  }
              }
          ]
      });

      await alert.present();
        
  }
  async deleteMessage() {
    const toast = await this.toastCtrl.create({
        message: 'Departement supprimé avec succès',
        duration: 2000
    });
    toast.present();
}

}
