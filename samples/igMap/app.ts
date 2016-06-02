import { Component, Inject, ElementRef, EventEmitter, HostListener} from 'angular2/core';
import { IgMapComponent} from "../../src/igniteui.angular2.ts";
import {bootstrap }    from 'angular2/platform/browser'

declare var jQuery: any;
@Component({
	selector: 'my-app',
	templateUrl: "../igMap/igMapTemplate.html",
	directives: [IgMapComponent]
})
export class AppComponent {
	constructor() {
	}
}
bootstrap(AppComponent);