import { NgModule } from '@angular/core';
import { IonicPageModule, IonicModule } from 'ionic-angular';
import { HomePage } from './home';
import { EventosPage } from '../eventos/eventos';

@NgModule({
  declarations: [
    HomePage,
    EventosPage
  ],
  entryComponents: [
    HomePage,
    EventosPage
  ],
  imports: [
    IonicModule.forRoot(HomePage),
    IonicPageModule.forChild(HomePage),
  ],
})
export class HomePageModule {}
