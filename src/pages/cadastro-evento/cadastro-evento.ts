import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Evento } from '../../app/classes/Evento';
import { Favorito } from '../../app/classes/Favorito';

/**
 * Generated class for the CadastroEventoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-evento',
  templateUrl: 'cadastro-evento.html',
})
export class CadastroEventoPage {
  nEvento : Evento;
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController) {



  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroEventoPage');
  }

  fecharModal(){
    this.viewCtrl.dismiss();
  }

}
