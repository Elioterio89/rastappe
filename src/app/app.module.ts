
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
    PerfilPage

    
  ],
  imports: [
    ComponentsModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
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
    PerfilPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
