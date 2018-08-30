import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';


///////////paginas/////////////
import { EventosPage } from '../eventos/eventos';
//////////////////////////////


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
 rootPage:any ='';//HomePage;//EventosPage;// HomePage;

  pages: Array<{ title: string, icon: string, component: any }>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.pages = [
      { title: 'Home', icon: 'md-contact', component: HomePage },
      { title: 'Eventos', icon: 'md-calendar', component: EventosPage }
    ];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
   // this.navCtrl.push(EventosPage);
    this.navCtrl.setRoot(page.component);
  }

}
