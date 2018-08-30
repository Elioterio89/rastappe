import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { ExpandableComponent } from './expandable/expandable';
@NgModule({
	declarations: [ExpandableComponent],
	imports: [IonicModule],
	exports: [ExpandableComponent]
})
export class ComponentsModule {}
