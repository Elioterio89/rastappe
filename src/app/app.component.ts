import { ExpandableComponent } from './../components/expandable/expandable';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { timer } from 'rxjs/observable/timer';
import { HomePage } from '../pages/home/home';
import { ModalMapPage } from '../pages/modal-map/modal-map';
import { EventosPage } from '../pages/eventos/eventos';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any =EventosPage;// HomePage;

  public splash :boolean = true;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      timer(3000).subscribe(()=> this.splash=false);
    });
  }

}

