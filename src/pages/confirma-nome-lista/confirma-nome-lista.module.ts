import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfirmaNomeListaPage } from './confirma-nome-lista';

@NgModule({
  declarations: [
    ConfirmaNomeListaPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfirmaNomeListaPage),
  ],
})
export class ConfirmaNomeListaPageModule {}
