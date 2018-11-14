import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventoDescricaoPage } from './evento-descricao';

@NgModule({
  declarations: [
    EventoDescricaoPage,
  ],
  imports: [
    IonicPageModule.forChild(EventoDescricaoPage),
  ],
})
export class EventoDescricaoPageModule {}
