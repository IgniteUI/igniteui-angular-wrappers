import { Component, Inject, ElementRef, EventEmitter, HostListener} from 'angular2/core';
import {IgLayoutManagerComponent} from "../../src/igniteui.angular2.ts";
import {bootstrap }    from 'angular2/platform/browser'

declare var jQuery: any;
@Component({
	selector: 'my-app',
	templateUrl:".../igLayoutManager/igLayoutManagerTemplate.html",
	directives: [IgLayoutManagerComponent]
})
export class AppComponent {
	private layoutOptions: any;

	constructor() {        
		this.layoutOptions={
            layoutMode: "border",
            height:"300px",
            borderLayout: {
                leftWidth:"10%",
                rightWidth:"20%"                
            }            
        };
	}
}
bootstrap(AppComponent);