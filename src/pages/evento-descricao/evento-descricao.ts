import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CardSlide } from '../../app/classes/CardSlide ';

@IonicPage()
@Component({
  selector: 'page-evento-descricao',
  templateUrl: 'evento-descricao.html',
})
export class EventoDescricaoPage {
  evento:CardSlide;

  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
     this.evento = navParams.get('evento');
     console.log(this.evento );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventoDescricaoPage');
  }

}
