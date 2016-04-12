import { Component, Inject, ElementRef, EventEmitter, HostListener} from 'angular2/core';
import { IgUploadComponent} from "../../src/igniteui.angular2.ts";
import {bootstrap}    from 'angular2/platform/browser'

declare var jQuery: any;
@Component({
	selector: 'my-app',
	templateUrl: '../igUpload/igUploadTemplate.html',
	directives: [IgUploadComponent]
})
export class AppComponent {
	constructor() {
	}
}
bootstrap(AppComponent);