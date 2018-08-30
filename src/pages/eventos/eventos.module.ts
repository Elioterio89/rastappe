import { ExpandableComponent } from './../../components/expandable/expandable';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventosPage } from './eventos';
import { ComponentsModule } from'../../components/components.module';

@NgModule({
  declarations: [
    EventosPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(EventosPage),
  ],
})
export class EventosPageModule {}
