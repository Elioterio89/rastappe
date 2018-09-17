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
  eventos: any = [];
  itensSlide: CardSlide[] = [];
  rootPage = EventosPage;
  date :DateTime;
  mes: any = [  ];


  //itemExpandHeight: string = 'auto';
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public sanitizer: DomSanitizer,
    public modalCtrl: ModalController,
    public menuCtrl: MenuController) {
      
      this.mes = [
        {1:'Jan'},
        {2:'Fev'},
        {3:'Mar'},
        {4:'Abr'},
        {5:'Mai'},
        {6:'Jun'},
        {7:'Jul'},
        {8:'Ago'},
        {9:'Set'},
        {10:'Out'},
        {11:'Nov'},
        {12:'Dez'},
      ];
    
      

    this.eventos = [
      { expanded: false ,itemEvento: new Evento('../../assets/imgs/eventos/0.png',0,'Forro da Gota + Agusto Luiz',
      new Date(2018,6,8,23,0,0),'Amsterdan-Salvador(BA)','Forro da Gota',
      '20R$(Sympla)/30R$(ate 23hrs)/40R$(Após 23Hrs)',
      'Sympla/Local do evento','forrodagota@gmail.com/(71)3333-3333',
      'open bar de catuaba ate 00hrs',
      'Peeense num salão chameguento! Se achegue sexta, às 23h, lá no @mirantedosaflitos #forródagota #meunorte #mirantedosaflitos #pensenumralabuchobom #forró #forróemsalvador #forróbaiano #forródabahia @hedernovaes')
      ,nomeMes:this.mes[new Date(2018,6,8,23,0,0).getMonth()]},
      { expanded: false ,itemEvento:  new Evento('../../assets/imgs/eventos/1.jpg',1,'Trio Caruá',
      new Date(2018,2,18,18,0,0),'Tenda dos guardiões-São Carlos(SP)','Forro dos Guardões',
      'Entrada Franca',
      '','triocarua@gmail.com/(15)3444-3333',
      '',
      'Forro dos guardiões apresenta :TRIO CARUÁ')
      ,nomeMes:this.mes[new Date(2018,2,18,18,0,0).getMonth()]},
      { expanded: false ,itemEvento:   new Evento('../../assets/imgs/eventos/2.jpeg',2,'Trio Bastião + PEIXELETRICO',
      new Date(2018,7,13,8,0,0),'Remelexo Brasil-São Paulo(SP)','Remeleio Brasil',
      '30R$',
      'Local do evento','FB.COM/REMELEXOBR ',
      '',
      ''),nomeMes:this.mes[new Date(2018,7,13,8,0,0).getMonth()]},
      { expanded: false ,itemEvento: new Evento('../../assets/imgs/eventos/3.jpeg',3,'Ó do Forro + DJ Admano',
      new Date(2018,9,22,22,0,0),'Forro no Iate-Belo Horizonte(MG)','Forro no Iate',
      '50R$',
      'Local do evento','(31)99611-2592',
      'Cd para os 20 primeiros/estacionamento Gratuito',
      'Lançameto do album A ORIGEM O AGORA E O FUTURO '),nomeMes:this.mes[new Date(2018,9,22,22,0,0).getMonth()]},
      { expanded: false ,itemEvento: new Evento('../../assets/imgs/eventos/4.jpeg',4,'Falamansa + Forro do Tico + Daniel Vieira + Kartlove',
      new Date(2018,4,6,21,0,0),'Armazem-Lauro de Freitas(BA)','Armazem vilas',
      '50R$ (H)/30R$ (M)',
      'Local do evento','Armazem@gmail.com/(71)3333-4443',
      'open bar para elas ate 01hrs',
      'Arraia da vila ,primeira festa oficial do sao joão na bahia'),nomeMes:this.mes[new Date(2018,4,6,21,0,0).getMonth()]},
      { expanded: false ,itemEvento: new Evento('../../assets/imgs/eventos/5.jpeg',5,'RASTAPÉ',
      new Date(2018,10,5,22,0,0),'Espaço Villa-Eunapolis(BA)','oXarope',
      '30R$ Pista/80R$ Camarote',
      'Local do evento/oxarope.com','oxarope.com',
      'Camarote EXCLUSIVE open Bar(Cerveja, agua,refrigerante,Vodka)',
      'Pela primeira vez em Eunapolis'),nomeMes:this.mes[ new Date(2018,10,5,22,0,0).getMonth()]},
      { expanded: false ,itemEvento:  new Evento('../../assets/imgs/eventos/6.jpeg',6,'Carlos Villela + Cezzinha + Zelito MIranda + Cicinha de Paula',
      new Date(2018,5,3,15,0,0),'Coliseu do forro-Salvador(BA)','Coliseu do forro',
      '20R$',
      'Local do evento','coliseudoforro.com',
      '',
      'Villea Convida'),nomeMes:this.mes[new Date(2018,5,3,15,0,0).getMonth()]},
      { expanded: false ,itemEvento:new Evento('../../assets/imgs/eventos/7.jpeg',7,'Trio dona Zefa + DJ Edu RQ',
      new Date(2018,5,26,23,0,0),'Forro Brasil-São Paulo(SP)','Forro Brasil',
      '40R$',
      'Local do evento','forrobrasil@gmail.com/(15)3500-3333',
      '',
      'Forro Brasil Apresenta'),nomeMes:this.mes[new Date(2018,5,26,23,0,0).getMonth()]},
      { expanded: false ,itemEvento:  new Evento('../../assets/imgs/eventos/8.jpeg',8,'Raizes do Sertão + Forró Ispilicute + Forro do Pofessor + dj',
      new Date(2018,12,13,20,0,0),'Minas Brasilia Tenis Clube-Brasilia(DF)','Raizes do Sertão',
      '40R$',
      'Sympla/Local do evento','raizesdosertao@gmail.com',
      '2 Ambientes',
      ''),nomeMes:this.mes[new  Date(2018,12,13,20,0,0).getMonth()]},
      { expanded: false ,itemEvento: new Evento('../../assets/imgs/eventos/9.jpeg',9,'Raizes forro club + DJ Paulo Andre',
      new Date(2018,5,23,20,0,0),'Portela Cafe-Salvador(BA)','Quarta Forro Club',
      '20R$ / 15$ (nome na lista)',
      'Local do evento','quartaforroclube@gmail.com/(71)4334-3333',
      'Aulão de forro com grupo Alumiar',
      ''),nomeMes:this.mes[new Date(2018,5,23,20,0,0).getMonth()]},
      { expanded: false ,itemEvento:  new Evento('../../assets/imgs/eventos/10.jpg',10,'Augusto Luiz + DJ Xenon',
      new Date(2018,9,16,11,0,0),'Chacara Asa branca-Vila do Abrantes(BA)','1Tonelada de Forro',
      '30R$(Ate 09/09)/35R$(ate 15/09)/40R$(no Dia)',
      'Sympla/Local do evento','umatoneladadeforro(FB/Instagram)/(71)99236-1164',
      'All Inclusive',
      'Esquente para o #1toneladadeforro'),nomeMes:this.mes[new Date(2018,9,16,11,0,0).getMonth()]},
      { expanded: false ,itemEvento:  new Evento('../../assets/imgs/eventos/11.jpg',11,'Jo Miranda ',
      new Date(2018,9,23,19,0,0),'Chacara Asa branca-Vila do Abrantes(BA)','1Tonelada de Forro',
      '15R$(nome na lista)/20R$',
      'Local do evento','jomorianda(FB/Instagram)',
      '',
      ''),nomeMes:this.mes[new Date(2018,9,23,19,0,0).getMonth()]}
    ];
    this.itensSlide = new Array(

      new CardSlide('../../assets/imgs/1.jpg', 1, 'Arraiá F4a', '2ªTrv Domningos Rabelo,100-Ribeira,Salvador(BA)'),
      new CardSlide('../../assets/imgs/2.jpg', 2, 'B-Day G.E./F4a', 'Rua da casa de Danilo,704-Pernambues,Salvador(BA)'),
      new CardSlide('../../assets/imgs/3.jpg', 3, 'WorkShop de Forro', 'Na casa da porra,69-ALI,Salvador(BA)'),
      new CardSlide('../../assets/imgs/4.jpg', 4, 'Aniversario A4a', 'Rua da casa de Danilo,704-Pernambues,Salvador(BA)'),
      new CardSlide('../../assets/imgs/5.jpg', 5, '#2 Uma Tonelada de Forró', 'Eco Resort,Santo Estevão(BA)'),

    );
 

  }

  formatMes( pMes){   

     this.mes[pMes];

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

    this.eventos.map((listItem) => {

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
