import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController, Option, ModalController } from 'ionic-angular';
import { FileTransfer, FileTransferObject, FileUploadOptions } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Evento } from '../../app/classes/Evento';
import { Favorito } from '../../app/classes/Favorito';
import { ModalMapPage } from '../modal-map/modal-map';

/**
 * Generated class for the CadastroEventopt2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()

@Component({
  selector: 'page-cadastro-eventopt2',
  templateUrl: 'cadastro-eventopt2.html',
})
export class CadastroEventopt2Page {
  preCadastro: Array<{nome: string, atracoes: string,contatos: string, producao: string , valores: string, vendas: string, datahora: Date }>;
  newEvento:Evento;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public modalCtrl: ModalController,public viewCtrl:ViewController,
    private transfer: FileTransfer, private file: File ,private loadingCtrl:LoadingController) {

    this.preCadastro=navParams.get('preCad');

    this.newEvento =new Evento('',1,'','',
    new Date(2018,5,8,13,0,0),'','',
    '',
    '','',
    '',
    '',new Favorito(false))


    console.log(this.preCadastro);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroEventopt2Page');
  }

  voltarCad(){
    this.viewCtrl.dismiss(this.preCadastro);
  }

  uploadBanner(){
    let loader = this.loadingCtrl.create({
      content:"Carregando..."
    });
    loader.present();

    const fileTransfer: FileTransferObject = this.transfer.create();

    var radom = Math.floor(Math.random()*100);


    let options:FileUploadOptions = {

      fileKey:'banner',
      fileName:this.preCadastro['nome']+radom+".jpg",
      chunkedMode:false,
      httpMethod:'post',
      mimeType:"image/jpeg",
      headers:{}
    }

    fileTransfer.upload(this.newEvento.banner,'../../assets/imgs/',options).then((data)=> {
      alert("Sucesso");
      loader.dismiss();
    },(err)=> {
      console.log(err);
      alert("Erro");
      loader.dismiss();
      //this.presentToast(err);
    });

  }

  abrirMapa() {
    this.modalCtrl.create(ModalMapPage).present();
  }


  resize() {
    // Something good, something bad? A bit of both!
  }

//https://www.youtube.com/watch?v=M1vMRAgt4NM minuto 4:18
  }


