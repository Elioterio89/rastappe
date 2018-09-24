
import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExpandableComponent } from './expandable/expandable';



@NgModule({
	declarations: [ExpandableComponent,
				  ],
	imports: [IonicModule,
			  CommonModule,
			  FormsModule,  
			],
	exports: [ExpandableComponent,
			]
})
export class ComponentsModule {}
