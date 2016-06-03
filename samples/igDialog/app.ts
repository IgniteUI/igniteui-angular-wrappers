import { Component, Inject, ElementRef, EventEmitter, HostListener} from '@angular/core';
import {IgDialogComponent } from "../../src/igniteui.angular2.ts";
import {bootstrap }    from '@angular/platform-browser-dynamic'

declare var jQuery: any;
@Component({
	selector: 'my-app',
	templateUrl: `../igDialog/igDialogTemplate.html`,
	directives: [IgDialogComponent]
})
export class AppComponent {
	private options: any;

	constructor() {
		this.options = {
            headerText : "Foo",
            height: "325px"
		};
	}
}
bootstrap(AppComponent);