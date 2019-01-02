import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Perfil } from '../../app/classes/Perfil';

/**
 * Generated class for the CadPerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cad-perfil',
  templateUrl: 'cad-perfil.html',
})
export class CadPerfilPage {
  perfil:Perfil;
  senha2:string;
  selectOptions: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController) {

    this.perfil = new Perfil("","","","","","","","","");
    this.senha2="";
    this.selectOptions = {
      title: 'País',
      opcoes:["Brasil","Alemanha","USA","Argentina","Uruguai"],
      mode: 'md'
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadPerfilPage');
  }

  cadPt(perfil,senha2){
  
    if(perfil.senha===senha2){

    this.viewCtrl.dismiss(perfil);
    }
  }



  fecharModal(){

    this.viewCtrl.dismiss(null);
  }

}
