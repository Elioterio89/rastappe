import { Component, AUTO_STYLE } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalMapPage } from '../modal-map/modal-map';
import { CardSlide } from '../../app/classes/CardSlide ';
import { MenuController } from 'ionic-angular';
import { EventoDescricaoPage } from '../evento-descricao/evento-descricao';



@IonicPage()
@Component({
  selector: 'page-eventos',
  templateUrl: 'eventos.html',
})
export class EventosPage {
  items: any = [];
  itensSlide: CardSlide[] = [];
  rootPage=EventosPage;


  //itemExpandHeight: string = 'auto';
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public sanitizer: DomSanitizer,
    public modalCtrl: ModalController,
    public menuCtrl:MenuController) {

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

      new CardSlide('../../assets/imgs/1.jpg', 1,'Arraiá F4a','2ªTrv Domningos Rabelo,100-Ribeira,Salvador(BA)'),
      new CardSlide('../../assets/imgs/2.jpg', 2,'B-Day G.E./F4a','Rua da casa de Danilo,704-Pernambues,Salvador(BA)'),
      new CardSlide('../../assets/imgs/3.jpg', 3,'WorkShop de Forro','Na casa da porra,69-ALI,Salvador(BA)'),
      new CardSlide('../../assets/imgs/4.jpg', 4,'Aniversario A4a','Rua da casa de Danilo,704-Pernambues,Salvador(BA)'),
      new CardSlide('../../assets/imgs/5.jpg', 5,'#2 Uma Tonelada de Forró','Eco Resort,Santo Estevão(BA)'),

    );

  }

  detalharEvento(item){    
    this.navCtrl.push(EventoDescricaoPage,{evento:item});
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
