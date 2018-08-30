import { HomePage } from '../home/home';
import { Component, AUTO_STYLE } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalMapPage } from '../modal-map/modal-map';
import { CardSlide } from '../../app/classes/CardSlide ';


/**
 * Generated class for the EventosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-eventos',
  templateUrl: 'eventos.html',
})
export class EventosPage {
  items: any = [];
  itensSlide: CardSlide[] = [];


  //itemExpandHeight: string = 'auto';
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public sanitizer: DomSanitizer,
    public modalCtrl: ModalController) {

    this.items = [
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false }
    ];
    this.itensSlide = new Array(

      new CardSlide('../../assets/imgs/1.jpg', 1),
      new CardSlide('../../assets/imgs/2.jpg', 2),
      new CardSlide('../../assets/imgs/3.jpg', 3),
      new CardSlide('../../assets/imgs/4.jpg', 4),
      new CardSlide('../../assets/imgs/5.jpg', 5)

    );

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
  expandItem(item) {

    this.items.map((listItem) => {

      if (item == listItem) {
        listItem.expanded = !listItem.expanded;
      } else {
        listItem.expanded = false;
      }

      return listItem;

    });

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EventosPage');
  }

}
