
import { LoginPage } from '../pages/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { EventosPage } from '../pages/eventos/eventos';
import { ModalMapPage } from '../pages/modal-map/modal-map';
import { ComponentsModule } from '../components/components.module';
import { MenuPage } from '../pages/menu/menu';
import { SobrePage } from '../pages/sobre/sobre';
import { AulasPage } from '../pages/aulas/aulas';
import { BlogPage } from '../pages/blog/blog';
import { LojaPage } from '../pages/loja/loja';
import { PerfilPage } from '../pages/perfil/perfil';
import { EventoDescricaoPage } from '../pages/evento-descricao/evento-descricao';
import { CalendarioModalPage } from '../pages/calendario-modal/calendario-modal';
import { Calendar } from '@ionic-native/calendar';
import { IonicStorageModule } from '@ionic/storage';
import { SocialSharing } from '@ionic-native/social-sharing';
import { NomeListaModalPage } from '../pages/nome-lista-modal/nome-lista-modal';
import { ConfirmaNomeListaPage } from '../pages/confirma-nome-lista/confirma-nome-lista';
import { FavoritosPage } from '../pages/favoritos/favoritos';
import { CadastroEventoPage } from '../pages/cadastro-evento/cadastro-evento';
import { CadastroEventopt2Page } from '../pages/cadastro-eventopt2/cadastro-eventopt2';
import { FileTransfer } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { ConfirmaCadastroPage } from '../pages/confirma-cadastro/confirma-cadastro';
import { CadPerfilPage } from '../pages/cad-perfil/cad-perfil';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

var config = {
  apiKey: "AIzaSyBVR0r8RKjVdLLwkoFDzN3TldCPEvJFaXY",
  authDomain: "rastappe-bd3f4.firebaseapp.com",
  databaseURL: "https://rastappe-bd3f4.firebaseio.com",
  projectId: "rastappe-bd3f4",
  storageBucket: "rastappe-bd3f4.appspot.com",
  messagingSenderId: "264981965341"
};


@NgModule({
  declarations: [
    MyApp,
    EventosPage,
    ModalMapPage,
    LoginPage,
    MenuPage,
    SobrePage,
    AulasPage,
    BlogPage,    
    LojaPage,
    PerfilPage,
    EventoDescricaoPage,
    CalendarioModalPage,
    NomeListaModalPage,
    ConfirmaNomeListaPage,
    FavoritosPage,
    CadastroEventoPage,
    CadastroEventopt2Page,
    ConfirmaCadastroPage,
    CadPerfilPage,

    
  ],
  imports: [
    ComponentsModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    EventosPage,
    ModalMapPage,
    LoginPage,
    MenuPage,
    SobrePage,
    AulasPage,
    BlogPage,
    LojaPage,    
    PerfilPage,
    EventoDescricaoPage,
    CalendarioModalPage,
    NomeListaModalPage,
    ConfirmaNomeListaPage,
    FavoritosPage,
    CadastroEventoPage,
    CadastroEventopt2Page,
    ConfirmaCadastroPage,
    CadPerfilPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FileTransfer,
    File,
    SocialSharing,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Calendar
  ]
})
export class AppModule {}
