import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController, MenuController } from 'ionic-angular';
import { CardSlide } from '../../app/classes/CardSlide ';
import { ModalMapPage } from '../modal-map/modal-map';

@IonicPage()
@Component({
  selector: 'page-evento-descricao',
  templateUrl: 'evento-descricao.html',
})
export class EventoDescricaoPage {
  evento:CardSlide;

  

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public modalCtrl:ModalController,public alertCtrl: AlertController, public menuCtrl: MenuController) {
     this.evento = navParams.get('evento');
     console.log(this.evento );
     
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on this page
    this.menuCtrl.enable(false);
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving this page
    this.menuCtrl.enable(true);
  }
  
  abrirMapa() {
    this.modalCtrl.create(ModalMapPage).present();
  }

  AlertNomelista() {
    let prompt = this.alertCtrl.create({
      title: "Lista Amiga",
      message: "Envie o nome aqui!",
      inputs: [
        {
          name: 'mome',
          placeholder: 'Nome'
        },
      ],
      buttons: [
        {
          text: 'OK',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ],
      cssClass: 'alertLista'
    });
    prompt.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventoDescricaoPage');
  }

}
