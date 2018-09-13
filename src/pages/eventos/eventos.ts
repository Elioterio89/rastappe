import { Component, AUTO_STYLE } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, DateTime } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalMapPage } from '../modal-map/modal-map';
import { CardSlide } from '../../app/classes/CardSlide ';
import { Evento } from '../../app/classes/Evento';
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
  eventos:Evento[]=[];
  rootPage = EventosPage;
  date :DateTime;


  //itemExpandHeight: string = 'auto';
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public sanitizer: DomSanitizer,
    public modalCtrl: ModalController,
    public menuCtrl: MenuController) {

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

      new CardSlide('../../assets/imgs/1.jpg', 1, 'Arraiá F4a', '2ªTrv Domningos Rabelo,100-Ribeira,Salvador(BA)'),
      new CardSlide('../../assets/imgs/2.jpg', 2, 'B-Day G.E./F4a', 'Rua da casa de Danilo,704-Pernambues,Salvador(BA)'),
      new CardSlide('../../assets/imgs/3.jpg', 3, 'WorkShop de Forro', 'Na casa da porra,69-ALI,Salvador(BA)'),
      new CardSlide('../../assets/imgs/4.jpg', 4, 'Aniversario A4a', 'Rua da casa de Danilo,704-Pernambues,Salvador(BA)'),
      new CardSlide('../../assets/imgs/5.jpg', 5, '#2 Uma Tonelada de Forró', 'Eco Resort,Santo Estevão(BA)'),

    );


    this.eventos = new Array(
      
      new Evento('../../assets/imgs/eventos/0.png',0,'Forro da Gota + Agusto Luiz',
      '20180608 23hrs','Amsterdan-Salvador(BA)','Forro da Gota',
      '20R$(Sympla)/30R$(ate 23hrs)/40R$(Após 23Hrs)',
      'Sympla/Local do evento','forrodagota@gmail.com/(71)3333-3333',
      'open bar de catuaba ate 00hrs',
      'Peeense num salão chameguento! Se achegue sexta, às 23h, lá no @mirantedosaflitos #forródagota #meunorte #mirantedosaflitos #pensenumralabuchobom #forró #forróemsalvador #forróbaiano #forródabahia @hedernovaes'),

      new Evento('../../assets/imgs/eventos/1.png',1,'Trio Caruá',
      new DateTime(18/02/2018 18hrs),'Tenda dos guardiões-São Carlos(SP)','Forro dos Guardões',
      'Entrada Franca',
      '','triocarua@gmail.com/(15)3444-3333',
      '',
      'Forro dos guardiões apresenta :TRIO CARUÁ'),
      new Evento('../../assets/imgs/eventos/2.png',2,'Trio Bastião + PEIXELETRICO',
      '20180713 8HRS','Remelexo Brasil-São Paulo(SP)','Remeleio Brasil',
      '30R$',
      'Local do evento','FB.COM/REMELEXOBR ',
      '',
      ''),
      new Evento('../../assets/imgs/eventos/3.png',3,'Ó do Forro + DJ Admano',
      '20180922 22hrs','Forro no Iate-Belo Horizonte(MG)','Forro no Iate',
      '50R$',
      'Local do evento','(31)99611-2592',
      'Cd para os 20 primeiros/estacionamento Gratuito',
      'Lançameto do album A ORIGEM O AGORA E O FUTURO '),
      new Evento('../../assets/imgs/eventos/4.jpeg',4,'Falamansa + Forro do Tico + Daniel Vieira + Kartlove',
      '20180406 21hrs','Armazem-Lauro de Freitas(BA)','Armazem vilas',
      '50R$ (H)/30R$ (M)',
      'Local do evento','Armazem@gmail.com/(71)3333-4443',
      'open bar para elas ate 01hrs',
      'Arraia da vila ,primeira festa oficial do sao joão na bahia'),
      new Evento('../../assets/imgs/eventos/o.png',1,'Forro da Gota + Agusto Luiz',
      20180608,'Amsterdan-Salvador(BA)','Forro da Gota',
      '20R$(Sympla)/30R$(ate 23hrs)/40R$(Após 23Hrs)',
      'Sympla/Local do evento','forrodagota@gmail.com/(71)3333-3333',
      'open bar de catuaba ate 00hrs',
      'Peeense num salão chameguento! Se achegue sexta, às 23h, lá no @mirantedosaflitos #forródagota #meunorte #mirantedosaflitos #pensenumralabuchobom #forró #forróemsalvador #forróbaiano #forródabahia @hedernovaes'),
      new Evento('../../assets/imgs/eventos/o.png',1,'Forro da Gota + Agusto Luiz',
      20180608,'Amsterdan-Salvador(BA)','Forro da Gota',
      '20R$(Sympla)/30R$(ate 23hrs)/40R$(Após 23Hrs)',
      'Sympla/Local do evento','forrodagota@gmail.com/(71)3333-3333',
      'open bar de catuaba ate 00hrs',
      'Peeense num salão chameguento! Se achegue sexta, às 23h, lá no @mirantedosaflitos #forródagota #meunorte #mirantedosaflitos #pensenumralabuchobom #forró #forróemsalvador #forróbaiano #forródabahia @hedernovaes'),
      new Evento('../../assets/imgs/eventos/o.png',1,'Forro da Gota + Agusto Luiz',
      20180608,'Amsterdan-Salvador(BA)','Forro da Gota',
      '20R$(Sympla)/30R$(ate 23hrs)/40R$(Após 23Hrs)',
      'Sympla/Local do evento','forrodagota@gmail.com/(71)3333-3333',
      'open bar de catuaba ate 00hrs',
      'Peeense num salão chameguento! Se achegue sexta, às 23h, lá no @mirantedosaflitos #forródagota #meunorte #mirantedosaflitos #pensenumralabuchobom #forró #forróemsalvador #forróbaiano #forródabahia @hedernovaes'),
      new Evento('../../assets/imgs/eventos/o.png',1,'Forro da Gota + Agusto Luiz',
      20180608,'Amsterdan-Salvador(BA)','Forro da Gota',
      '20R$(Sympla)/30R$(ate 23hrs)/40R$(Após 23Hrs)',
      'Sympla/Local do evento','forrodagota@gmail.com/(71)3333-3333',
      'open bar de catuaba ate 00hrs',
      'Peeense num salão chameguento! Se achegue sexta, às 23h, lá no @mirantedosaflitos #forródagota #meunorte #mirantedosaflitos #pensenumralabuchobom #forró #forróemsalvador #forróbaiano #forródabahia @hedernovaes'),
      new Evento('../../assets/imgs/eventos/o.png',1,'Forro da Gota + Agusto Luiz',
      20180608,'Amsterdan-Salvador(BA)','Forro da Gota',
      '20R$(Sympla)/30R$(ate 23hrs)/40R$(Após 23Hrs)',
      'Sympla/Local do evento','forrodagota@gmail.com/(71)3333-3333',
      'open bar de catuaba ate 00hrs',
      'Peeense num salão chameguento! Se achegue sexta, às 23h, lá no @mirantedosaflitos #forródagota #meunorte #mirantedosaflitos #pensenumralabuchobom #forró #forróemsalvador #forróbaiano #forródabahia @hedernovaes'),
      new Evento('../../assets/imgs/eventos/o.png',1,'Forro da Gota + Agusto Luiz',
      20180608,'Amsterdan-Salvador(BA)','Forro da Gota',
      '20R$(Sympla)/30R$(ate 23hrs)/40R$(Após 23Hrs)',
      'Sympla/Local do evento','forrodagota@gmail.com/(71)3333-3333',
      'open bar de catuaba ate 00hrs',
      'Peeense num salão chameguento! Se achegue sexta, às 23h, lá no @mirantedosaflitos #forródagota #meunorte #mirantedosaflitos #pensenumralabuchobom #forró #forróemsalvador #forróbaiano #forródabahia @hedernovaes'),




    );

  }

  detalharEvento(item) {
    this.navCtrl.push(EventoDescricaoPage, { evento: item });
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
