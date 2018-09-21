
import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'angular-calendar';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap/modal/modal.module';
import { FlatpickrModule } from 'angularx-flatpickr';
import { ExpandableComponent } from './expandable/expandable';
import { CalendarComponent } from './calendar/calendar';
import { CalendarHeaderComponent } from './calendar-header/calendar-header';
import 'flatpickr/dist/flatpickr.css';



@NgModule({
	declarations: [ExpandableComponent,
    			   CalendarComponent,
				   CalendarHeaderComponent
				  ],
	imports: [IonicModule,
			  CommonModule,
			  FormsModule,  
			  NgbModalModule.forRoot(),
			  FlatpickrModule.forRoot(),
			  CalendarModule.forRoot()
			],
	exports: [ExpandableComponent,
			  CalendarComponent,
    		  CalendarHeaderComponent
			]
})
export class ComponentsModule {}
