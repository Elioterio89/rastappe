import { MenuPage } from '../menu/menu';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { CadPerfilPage } from '../cad-perfil/cad-perfil';
import firebase from 'firebase'; 
//import {} from 'angularfire'


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  logo:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public modalCtrl: ModalController,) {
    this.logo='../../assets/imgs/logo2.png';
  }


  loginComFacebook(){
    
  }

  logouComFacebook(){
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  logar() {
    this.navCtrl.setRoot(MenuPage);
  }



  cadastrar(preCad){
    
    let pModal =this.modalCtrl.create(CadPerfilPage,{preCad:preCad});
    pModal.onDidDismiss(data => { 
    });
    pModal.present(); 
  }


}
