
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalMapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-map',
  templateUrl: 'modal-map.html',
})
export class ModalMapPage {
  local :LocalEvento;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  getLocalEvento() {
    this.local=new LocalEvento('Amsterdam Rio Vermelho',
                    ' R. João Gomes',
                    '249 ',
                    'Rio Vermelho',
                    'Salvador',
                    'BA',
                    '41950-640');

  }

  fecharMapa() {  
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    this.getLocalEvento();
    console.log('ionViewDidLoad ModalMapPage');
  }

}
export class LocalEvento {
  nome: string;
  logradouro: string;
  numero: string;
  bairro: string;
  cidade: string;
  estado: string;
  pais: string;
  mapa: string;


  constructor(pNome: string, pLogradouro: string, pNumero: string, pBairro: string, pCidade: string, pEstado: string, pPais: string) {
    this.nome = pNome;
    this.bairro = pBairro;
    this.cidade = pCidade;
    this.logradouro = pLogradouro;
    this.estado = pEstado;
    this.numero = pNumero;
    this.pais = pPais;
    this.mapa = this.getMapa();

  }


  private getEndereco() {
    return this.logradouro + ',' + this.numero + '-' + this.bairro + ',' + this.cidade + '-' + this.estado+','+this.pais ;
  }

  private getMapa() {
    return 'https://maps.googleapis.com/maps/api/staticmap?zoom=16&size=600x300&&markers=color:blue|' 
    + this.getEndereco + '&key=AIzaSyCijFoXIO8aAg0Qh_l1KxsAj4DSuL0aYx8';
  }

}