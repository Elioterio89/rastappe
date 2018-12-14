import { MenuPage } from '../menu/menu';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  logo:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.logo='../../assets/imgs/logo2.png';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  logar() {
    this.navCtrl.setRoot(MenuPage);
  }


}
