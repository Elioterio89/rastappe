import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the NomeListaModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nome-lista-modal',
  templateUrl: 'nome-lista-modal.html',
})
export class NomeListaModalPage {
  nomes: Array<{titulo: string, type: string, value: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController) {
    this.nomes = [
      { titulo: "Nome/Sobrenome", type: "text", value: "" },
  ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NomeListaModalPage');
  }


  addNome(){
    //console.log(this.nomes);
    this.nomes.push({ titulo: "Nome/Sobrenome", type: "text", value: "" });
  }

  fecharModal(nomes,enviar){
    
    if(enviar===null){
      nomes=null;
    }
    
   // var dados={vet:nomes,bool:enviar };
    this.viewCtrl.dismiss(nomes);
  }
}
