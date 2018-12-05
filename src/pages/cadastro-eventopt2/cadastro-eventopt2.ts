import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the CadastroEventopt2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-eventopt2',
  templateUrl: 'cadastro-eventopt2.html',
})
export class CadastroEventopt2Page {
  preCadastro: Array<{nome: string, atracoes: string,contatos: string, producao: string , valores: string, vendas: string, datahora: Date }>;

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController) {

    this.preCadastro=navParams.get('preCad');
    console.log(this.preCadastro);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroEventopt2Page');
  }

  voltarCad(){
    this.viewCtrl.dismiss(this.preCadastro);
  }

}
