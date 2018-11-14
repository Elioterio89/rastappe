import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalendarioModalPage } from './calendario-modal';
import { ComponentsModule } from'../../components/components.module';

@NgModule({
  declarations: [
    CalendarioModalPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(CalendarioModalPage),
  ],
})
export class CalendarioModalPageModule {}
