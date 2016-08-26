import {Component, Inject, ElementRef, EventEmitter, HostListener} from '@angular/core';
import {IgComboComponent} from "../../src/igniteui.angular2.ts";
import {Northwind} from "./../data/northwind.ts";
import {bootstrap }    from '@angular/platform-browser-dynamic';
import { FORM_DIRECTIVES } from '@angular/common';

declare var jQuery: any;
@Component({
	selector: 'my-app',
	templateUrl: "./igComboTemplate.html",
	directives: [FORM_DIRECTIVES, IgComboComponent]
})
export class AppComponent {
	public options: IgCombo;
	public northwind: any;
	public combo: any;

	constructor() {
		this.northwind = Northwind.getData();
		this.options = {
			valueKey: "ProductID",
			textKey: "ProductName",
			dataSource: this.northwind,
			width: "100%"
		};
		this.combo = {
			value1: 20,
			value2: "Chang"
		}
	}
}

bootstrap(AppComponent);