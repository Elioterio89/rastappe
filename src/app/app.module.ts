import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EventosPage } from '../pages/eventos/eventos';
import { ModalMapPage } from '../pages/modal-map/modal-map';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EventosPage,
    ModalMapPage
  ],
  imports: [
    ComponentsModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EventosPage,
    ModalMapPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
