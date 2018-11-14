import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NomeListaModalPage } from './nome-lista-modal';

@NgModule({
  declarations: [
    NomeListaModalPage,
  ],
  imports: [
    IonicPageModule.forChild(NomeListaModalPage),
  ],
})
export class NomeListaModalPageModule {}
