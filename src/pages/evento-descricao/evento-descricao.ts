import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController, MenuController } from 'ionic-angular';
import { CardSlide } from '../../app/classes/CardSlide ';
import { ModalMapPage } from '../modal-map/modal-map';
import { Evento } from '../../app/classes/Evento';
import { ConfirmaNomeListaPage } from '../confirma-nome-lista/confirma-nome-lista';
import { NomeListaModalPage } from '../nome-lista-modal/nome-lista-modal';

@IonicPage()
@Component({
  selector: 'page-evento-descricao',
  templateUrl: 'evento-descricao.html',
})
export class EventoDescricaoPage {
  evento:Evento;
  mes: any = [  ];
  nomes: Array<{titulo: string, type: string, value: string , checked: boolean, nome:string}>;
  nomeConfirmados: Array<{titulo: string, type: string, value: string , checked: boolean, nome:string}>;
  

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public modalCtrl:ModalController,public alertCtrl: AlertController, public menuCtrl: MenuController) {
      this.mes = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez',''];  
     this.evento = navParams.get('evento');
     //console.log(this.evento );
     
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

  abrirNomeLista(nome){

    let pModal = this.modalCtrl.create(NomeListaModalPage,{nome:nome});
    pModal.onDidDismiss(data => {
      
      var cout =0;
      var Vnomes =[];
      if(data!==null){
        data.vet.forEach(function(nome){
          
          if(nome.value===""){
            
          }else{          
            Vnomes.push(nome);
            cout++;
          }     
          
        });
        if(data.bool === null || data.bool ===false || cout===0)
        {        
        }else{ 
          this.ConfirmaEnviaNomelista(Vnomes)        
        } 
     }
    });
    pModal.present();   
  }

  ConfirmaEnviaNomelista(nomes) {  
   
      nomes.forEach(function(nome)
      {
         nome.nome = nome.value;
      });
    let pModal = this.modalCtrl.create(ConfirmaNomeListaPage,{nomes:nomes});
    pModal.onDidDismiss(data => {
    //console.log(data);
    var VnomesConf =[];
    if(data!==null){
      data.vet.forEach(function(nome){
          
        if(nome.checked===true){
          VnomesConf.push(nome);
        }
        
      }); 
      this.nomeConfirmados =VnomesConf;
      console.log(this.nomeConfirmados);
    }
    });

   
    pModal.present();     
   

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad EventoDescricaoPage');
  }

}
