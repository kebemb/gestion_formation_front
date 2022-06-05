import { Component, OnInit } from '@angular/core';
import { EmployeService } from '../employe.service';
import { Employe } from '../employe';
import { Router } from '@angular/router';
import { 
  NavController,
  AlertController,
  MenuController,
  ToastController, 
  LoadingController
} from '@ionic/angular';


@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.scss'],
})
export class EmployeComponent implements OnInit {

employes: Employe [] = [];

  constructor(private employeService: EmployeService,
    private router: Router,
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController, 
    public loadingCtrl: LoadingController,
    public alertController: AlertController) { }

  ngOnInit() {
    this.getListeEmploye();
  }

  edit(id:string){
    this.router.navigate(['edit-employe',id]);
  }
  getListeEmploye() {
    this.employeService.getAll().subscribe((data: Employe[]) => {
      this.employes = data;
    });
  }
  create(){
    this.router.navigate(['create-employe']);
  }
  async delete(id: string) {
    this.employeService.delete(id)
      .subscribe(
        data => {
          console.log(data);
          this.getListeEmploye();
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
        message: 'Employé supprimé avec succès',
        duration: 2000
    });
    toast.present();
}

details(id:string){
  this.router.navigate(['details-employe',id]);
}

}
