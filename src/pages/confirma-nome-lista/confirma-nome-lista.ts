import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ConfirmaNomeListaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-confirma-nome-lista',
  templateUrl: 'confirma-nome-lista.html',
})
export class ConfirmaNomeListaPage {

  nomes: Array<{titulo: string, type: string, value: string , checked: boolean, nome:string}>;
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController) {

    this.nomes=navParams.get('nomes');
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmaNomeListaPage');
  }

  fecharModal(nomes,enviar){
    
    if(enviar===null){
      nomes=null;
    }

    var dados={vet:nomes,bool:enviar };
    this.viewCtrl.dismiss(dados);
  }

 
}
