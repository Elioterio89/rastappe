import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, DateTime } from 'ionic-angular';
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
  btnok:string;
  btnCancel:String;
  preCadastro: Array<{nome: string, atracoes: string,contatos: string, producao: string , valores: string, vendas: string, datahora: Date }>;
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController) {

 
    if (navParams.get('preCad')===null)
    {
    this.preCadastro = [
      { nome: "", atracoes: "",contatos:"",  producao:"",valores:"",vendas:"",datahora:new Date(1900,1,1,0,0,0) },
    ];
  ''}else{
    this.preCadastro=navParams.get('preCad');
    }



  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroEventoPage');
  }

  cadPt1(preCadastro){   
      
   // console.log(preCadastro);
   
    this.viewCtrl.dismiss(preCadastro);
  }

  fecharModal(){

    this.viewCtrl.dismiss(null);
  }
}


