import { PerfilPage } from '../perfil/perfil';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { EventosPage } from '../eventos/eventos';
import { AulasPage } from '../aulas/aulas';
import { SobrePage } from '../sobre/sobre';
import { BlogPage } from '../blog/blog';
import { LojaPage } from '../loja/loja';



@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  pages: Array<{title: string, icon:string, component: any,id:number}>;
  fotoPerfil:string;
  fotoGrupo:string;
  
  rootPage=EventosPage;

  @ViewChild(Nav) nav :Nav;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.fotoPerfil='../../assets/imgs/perfil.jpg';
    this.fotoGrupo='../../assets/imgs/perfil_grupo.jpg';
    
    this.pages = [
      { title: 'Perfil',icon:'md-contact', component: PerfilPage,id:1 },
      { title: 'Eventos',icon:'md-calendar', component: EventosPage,id:2 },
      { title: 'Aulas',icon:'md-paw', component: AulasPage,id:3 },      
      { title: 'Blog',icon:'md-chatbubbles', component: BlogPage,id:4 },
      { title: 'Loja',icon:'md-shirt', component: LojaPage,id:4 },
      { title: 'Sobre',icon:'md-information-circle', component: SobrePage,id:5 },
    ];
  }

   openPage(page) {
 
    this.nav.setRoot(page.component);
  }
}
