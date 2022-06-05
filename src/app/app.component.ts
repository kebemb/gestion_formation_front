import { Component } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx'
import { Pages } from './pages';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages: Array<Pages>;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public navCtrl: NavController
  ) {
    this.appPages = [
      {
        title: 'Home',
        url: '',
        direct: 'root',
        icon: 'home'
      },
      {
        title: 'Département',
        url: '/departement',
        direct: 'forward',
        icon: 'book'
      },
      {
        title: 'Employés',
        url: '/employe',
        direct: 'forward',
        icon: 'school'
      },
      {
        title: 'Formation',
        url: '/formation',
        direct: 'forward',
        icon: 'school'
      },
    ];

    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    }).catch(() => {});
  }

  goToEditProgile() {
    this.navCtrl.navigateForward('edit-profile');
  }

  logout() {
    this.navCtrl.navigateRoot('/');
  }
}
