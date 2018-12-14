import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Evento } from '../../app/classes/Evento';
import { Favorito } from '../../app/classes/Favorito';

/**
 * Generated class for the ConfirmaCadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-confirma-cadastro',
  templateUrl: 'confirma-cadastro.html',
})
export class ConfirmaCadastroPage {
  preCadastro: Array<{nome: string, atracoes: string,contatos: string, producao: string , valores: string, vendas: string,
            datahora: Date ,banner: string, localicao: string,descricao: string, infoEx: string,fim:boolean}>;
  cadastro :Evento;
  dados: any = [  ];
  DATA:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController) {

 
    this.preCadastro=navParams.get('Cad');
    this.DATA = this.formatarData(this.preCadastro['datahora']);
    this.preCadastro["banner"]='../../assets/imgs/1.jpg';

    this.cadastro = new Evento(this.preCadastro["banner"],155,this.preCadastro["nome"],this.preCadastro["atracoes"],
    this.DATA,this.preCadastro["localicao"],this.preCadastro["producao"],
    this.preCadastro["valores"],this.preCadastro["vendas"],this.preCadastro["contatos"],
    this.preCadastro["infoEx"],this.preCadastro["descricao"],new Favorito(false));



   // console.log(this.cadastro);
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmaCadastroPage');
  }

  voltarCad(){
    this.preCadastro['fim']=false;
    this.viewCtrl.dismiss(this.preCadastro);
  }

  formatarData(dataErrada){
    var vetData;
    dataErrada = dataErrada.replace(':','-');
    dataErrada = dataErrada.replace(':','-');
    dataErrada = dataErrada.replace('Z','');
    dataErrada = dataErrada.replace('T','-');
    vetData = dataErrada.split('-');
  

    return new Date(vetData[0],vetData[1]-1,vetData[2],vetData[3],vetData[4],vetData[5]);
  }


  finalizarCadastro(){
    this.preCadastro['fim']=true;
    this.viewCtrl.dismiss(this.preCadastro);
  }

}
