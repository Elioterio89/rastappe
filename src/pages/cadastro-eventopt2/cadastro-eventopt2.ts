import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController, Option, ModalController, TextInput,ToastController } from 'ionic-angular';
import { FileTransfer, FileTransferObject, FileUploadOptions } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Evento } from '../../app/classes/Evento';
import { Favorito } from '../../app/classes/Favorito';
import { ModalMapPage } from '../modal-map/modal-map';
import { ConfirmaCadastroPage } from '../confirma-cadastro/confirma-cadastro';


@IonicPage()

@Component({
  selector: 'page-cadastro-eventopt2',
  templateUrl: 'cadastro-eventopt2.html',
})
export class CadastroEventopt2Page {

  preCadastro: Array<{nome: string, atracoes: string,contatos: string, producao: string , valores: string, vendas: string,
    datahora: Date ,banner: string, localicao: string,descricao: string, infoEx: string}>;
  newEvento:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public modalCtrl: ModalController,public viewCtrl:ViewController,
    private transfer: FileTransfer, private file: File ,private loadingCtrl:LoadingController,private toastCtrl: ToastController) {

    this.preCadastro=navParams.get('preCad');

    //console.log(this.preCadastro);
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

    fileTransfer.upload(this.preCadastro['banner'],'../../assets/imgs/',options).then((data)=> {
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

  finalizarCad(){
    let pModal =this.modalCtrl.create(ConfirmaCadastroPage,{Cad:this.preCadastro});
    pModal.onDidDismiss(data => {
          this.preCadastro =data;
          //console.log(this.preCadastro); 
    });
    if(this.preCadastro["nome"]!==null && this.preCadastro["nome"]!==undefined && this.preCadastro["datahora"]!==null && this.preCadastro["datahora"]!==undefined){
      
      pModal.present(); 
    }else{
      //console.log(this.preCadastro);
      this.presentToast();
    }
    
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Faltam dados',
      duration: 2000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
      //console.log('Dismissed toast');
    });
  
    toast.present();
  }



//https://www.youtube.com/watch?v=M1vMRAgt4NM minuto 4:18
  }


