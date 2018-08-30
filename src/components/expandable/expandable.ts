import { Component, Input, ViewChild, ElementRef, Renderer } from '@angular/core';

@Component({
  selector: 'expandable',
  templateUrl: 'expandable.html'
})
export class ExpandableComponent {

    @ViewChild('expandWrapper', {read: ElementRef}) expandWrapper;
    @Input('expanded') expanded;
    @Input('expandHeight') expandHeight;

    constructor(public renderer: Renderer) {

    }

    ngAfterViewInit(){
        //this.renderer.setElementStyle(this.expandWrapper.nativeElement, 'height', 'auto' );
        //this.renderer.setElementStyle(this.expandWrapper.nativeElement, 'max-height', '600px' );      
    }

}