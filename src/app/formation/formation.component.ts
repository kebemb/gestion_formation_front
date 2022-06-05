import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Formation } from '../formation';
import { FormationService } from '../formation.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss'],
})
export class FormationComponent implements OnInit {

  formations : Observable<Formation[]>;
  constructor(
    private formationService: FormationService,
    private router: Router,
    public toastCtrl: ToastController, 
    public alertCtrl: AlertController,

  ) { }

  ngOnInit() {
    this.getListeFormation();
  }

  getListeFormation(){
    this.formations =this.formationService.getAll();
  }

  create(){
    this.router.navigate(['create-formation']);
  }


  async delete(id: string) {
    this.formationService.delete(id)
      .subscribe(
        data => {
          console.log(data);
          this.getListeFormation();
        },
        error => console.log(error));
        const alert = await this.alertCtrl.create({
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

  edit(id:string){
    this.router.navigate(['edit-formation',id]);
  }
  
  async deleteMessage() {
    const toast = await this.toastCtrl.create({
        message: 'Formation supprimée avec succès',
        duration: 2000
    });
    toast.present();
}

details(id:string){
  this.router.navigate(['details-formation',id]);
}

}
