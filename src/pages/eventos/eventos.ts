import { Component, AUTO_STYLE } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, DateTime } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalMapPage } from '../modal-map/modal-map';
import { CardSlide } from '../../app/classes/CardSlide ';
import { Evento } from '../../app/classes/Evento';
import { MenuController } from 'ionic-angular';
import { EventoDescricaoPage } from '../evento-descricao/evento-descricao';
import { Calendar} from '@ionic-native/calendar';




@IonicPage()
@Component({
  selector: 'page-eventos',
  templateUrl: 'eventos.html',
})
export class EventosPage {
  eventos: any = [];
  itensSlide: Evento[] = [];
  rootPage = EventosPage;
  date :DateTime;
  mes: any = [  ];


  //itemExpandHeight: string = 'auto';
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public sanitizer: DomSanitizer,
    public modalCtrl: ModalController,
    public menuCtrl: MenuController,
    private calendar: Calendar) { 
    this.mes = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez',''];    
      

    this.eventos = [
      { expanded: false ,itemEvento: new Evento('../../assets/imgs/eventos/0.png',0,'Forro da Gota','Forro da Gota + Agusto Luiz',
      new Date(2018,5,8,23,0,0),'Amsterdan-Salvador(BA)','Forro da Gota',
      '20R$(Sympla)/30R$(ate 23hrs)/40R$(Após 23Hrs)',
      'Sympla/Local do evento','forrodagota@gmail.com/(71)3333-3333',
      'open bar de catuaba ate 00hrs',
      'Peeense num salão chameguento! Se achegue sexta, às 23h, lá no @mirantedosaflitos #forródagota #meunorte #mirantedosaflitos #pensenumralabuchobom #forró #forróemsalvador #forróbaiano #forródabahia @hedernovaes')
      },
      { expanded: false ,itemEvento:  new Evento('../../assets/imgs/eventos/1.jpg',1,'','Trio Caruá',
      new Date(2018,1,18,18,0,0),'Tenda dos guardiões-São Carlos(SP)','Forro dos Guardões',
      'Entrada Franca',
      '','triocarua@gmail.com/(15)3444-3333',
      '',
      'Forro dos guardiões apresenta :TRIO CARUÁ')
      },
      { expanded: false ,itemEvento:   new Evento('../../assets/imgs/eventos/2.jpeg',2,'','Trio Bastião + PEIXELETRICO',
      new Date(2018,6,13,8,0,0),'Remelexo Brasil-São Paulo(SP)','Remeleio Brasil',
      '30R$',
      'Local do evento','FB.COM/REMELEXOBR ',
      '',
      '')},
      { expanded: false ,itemEvento: new Evento('../../assets/imgs/eventos/3.jpeg',3,'','Ó do Forro + DJ Admano',
      new Date(2018,8,22,22,0,0),'Forro no Iate-Belo Horizonte(MG)','Forro no Iate',
      '50R$',
      'Local do evento','(31)99611-2592',
      'Cd para os 20 primeiros/estacionamento Gratuito',
      'Lançameto do album A ORIGEM O AGORA E O FUTURO ')},
      { expanded: false ,itemEvento: new Evento('../../assets/imgs/eventos/4.jpeg',4,'','Falamansa + Forro do Tico + Daniel Vieira + Kartlove',
      new Date(2018,3,6,21,0,0),'Armazem-Lauro de Freitas(BA)','Armazem vilas',
      '50R$ (H)/30R$ (M)',
      'Local do evento','Armazem@gmail.com/(71)3333-4443',
      'open bar para elas ate 01hrs',
      'Arraia da vila ,primeira festa oficial do sao joão na bahia')},
      { expanded: false ,itemEvento: new Evento('../../assets/imgs/eventos/5.jpeg',5,'','RASTAPÉ',
      new Date(2018,9,5,22,0,0),'Espaço Villa-Eunapolis(BA)','oXarope',
      '30R$ Pista/80R$ Camarote',
      'Local do evento/oxarope.com','oxarope.com',
      'Camarote EXCLUSIVE open Bar(Cerveja, agua,refrigerante,Vodka)',
      'Pela primeira vez em Eunapolis')},
      { expanded: false ,itemEvento:  new Evento('../../assets/imgs/eventos/6.jpeg',6,'','Carlos Villela + Cezzinha + Zelito MIranda + Cicinha de Paula',
      new Date(2018,4,3,15,0,0),'Coliseu do forro-Salvador(BA)','Coliseu do forro',
      '20R$',
      'Local do evento','coliseudoforro.com',
      '',
      'Villea Convida')},
      { expanded: false ,itemEvento:new Evento('../../assets/imgs/eventos/7.jpeg',7,'','Trio dona Zefa + DJ Edu RQ',
      new Date(2018,4,26,23,0,0),'Forro Brasil-São Paulo(SP)','Forro Brasil',
      '40R$',
      'Local do evento','forrobrasil@gmail.com/(15)3500-3333',
      '',
      'Forro Brasil Apresenta')},
      { expanded: false ,itemEvento:  new Evento('../../assets/imgs/eventos/8.jpeg',8,'','Raizes do Sertão + Forró Ispilicute + Forro do Pofessor + dj',
      new Date(2018,11,13,20,0,0),'Minas Brasilia Tenis Clube-Brasilia(DF)','Raizes do Sertão',
      '40R$',
      'Sympla/Local do evento','raizesdosertao@gmail.com',
      '2 Ambientes',
      '')},
      { expanded: false ,itemEvento: new Evento('../../assets/imgs/eventos/9.jpeg',9,'','Raizes forro club + DJ Paulo Andre',
      new Date(2018,4,23,20,0,0),'Portela Cafe-Salvador(BA)','Quarta Forro Club',
      '20R$ / 15$ (nome na lista)',
      'Local do evento','quartaforroclube@gmail.com/(71)4334-3333',
      'Aulão de forro com grupo Alumiar',
      '')},
      { expanded: false ,itemEvento:  new Evento('../../assets/imgs/eventos/10.jpg',10,'','Augusto Luiz + DJ Xenon',
      new Date(2018,8,16,11,0,0),'Chacara Asa branca-Vila do Abrantes(BA)','1Tonelada de Forro',
      '30R$(Ate 09/09)/35R$(ate 15/09)/40R$(no Dia)',
      'Sympla/Local do evento','umatoneladadeforro(FB/Instagram)/(71)99236-1164',
      'All Inclusive',
      'Esquente para o #1toneladadeforro')},
      { expanded: false ,itemEvento:  new Evento('../../assets/imgs/eventos/11.jpg',11,'','Jo Miranda ',
      new Date(2018,8,23,19,0,0),'Chacara Asa branca-Vila do Abrantes(BA)','1Tonelada de Forro',
      '15R$(nome na lista)/20R$',
      'Local do evento','jomorianda(FB/Instagram)',
      '',
      '')}
    ];
    this.itensSlide = new Array(
      new Evento('../../assets/imgs/1.jpg',1,'Arraiá F4a Ressaca  SJ','Discotecagem',
      new Date(2018,5,8,13,0,0),'2ªTrv Domningos Rabelo,100-Ribeira,Salvador(BA)','Escola de Dança -Forro 4º Andar',
      '10R$ + Comida ou Beida',
      'Local do evento','forro4andar@gmail.com',
      'Consumir o produto equivalente ao que voce levou',
      'Venha curtir a ressaca do são Joao')
      ,
      new Evento('../../assets/imgs/2.jpg',2,'B-Day G.E./F4a','Forro da Gota + Agusto Luiz',
      new Date(2018,5,8,23,0,0),'Rua da casa de Danilo,704-Pernambues,Salvador(BA)','Forro da Gota',
      '20R$(Sympla)/30R$(ate 23hrs)/40R$(Após 23Hrs)',
      'Sympla/Local do evento','forrodagota@gmail.com/(71)3333-3333',
      'open bar de catuaba ate 00hrs',
      'Peeense num salão chameguento! Se achegue sexta, às 23h, lá no @mirantedosaflitos #forródagota #meunorte #mirantedosaflitos #pensenumralabuchobom #forró #forróemsalvador #forróbaiano #forródabahia @hedernovaes')
      ,
      new Evento('../../assets/imgs/3.jpg',3,'WorkShop de Forro','Forro da Gota + Agusto Luiz',
      new Date(2018,5,8,23,0,0), 'Na casa da porra,69-ALI,Salvador(BA)','Forro da Gota',
      '20R$(Sympla)/30R$(ate 23hrs)/40R$(Após 23Hrs)',
      'Sympla/Local do evento','forrodagota@gmail.com/(71)3333-3333',
      'open bar de catuaba ate 00hrs',
      'Peeense num salão chameguento! Se achegue sexta, às 23h, lá no @mirantedosaflitos #forródagota #meunorte #mirantedosaflitos #pensenumralabuchobom #forró #forróemsalvador #forróbaiano #forródabahia @hedernovaes')
      ,
      new Evento('../../assets/imgs/4.jpg',4,'Aniversario A4a','Forro da Gota + Agusto Luiz',
      new Date(2018,5,8,23,0,0),'Rua da casa de Danilo,704-Pernambues,Salvador(BA)','Forro da Gota',
      '20R$(Sympla)/30R$(ate 23hrs)/40R$(Após 23Hrs)',
      'Sympla/Local do evento','forrodagota@gmail.com/(71)3333-3333',
      'open bar de catuaba ate 00hrs',
      'Peeense num salão chameguento! Se achegue sexta, às 23h, lá no @mirantedosaflitos #forródagota #meunorte #mirantedosaflitos #pensenumralabuchobom #forró #forróemsalvador #forróbaiano #forródabahia @hedernovaes')
      ,
      new Evento('../../assets/imgs/5.jpg',5,'#2 Uma Tonelada de Forró','Forro da Gota + Agusto Luiz',
      new Date(2018,5,8,23,0,0),'Eco Resort,Santo Estevão(BA)','Forro da Gota',
      '20R$(Sympla)/30R$(ate 23hrs)/40R$(Após 23Hrs)',
      'Sympla/Local do evento','forrodagota@gmail.com/(71)3333-3333',
      'open bar de catuaba ate 00hrs',
      'Peeense num salão chameguento! Se achegue sexta, às 23h, lá no @mirantedosaflitos #forródagota #meunorte #mirantedosaflitos #pensenumralabuchobom #forró #forróemsalvador #forróbaiano #forródabahia @hedernovaes')
      

    );
    
  this.calendar.createCalendar('MyCalendar').then(
    (msg) => { console.log(msg); },
    (err) => { console.log(err); }
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
