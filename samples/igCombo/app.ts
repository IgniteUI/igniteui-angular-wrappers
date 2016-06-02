import {Component, Inject, ElementRef, EventEmitter, HostListener} from 'angular2/core';
import {IgComboComponent} from "../../src/igniteui.angular2.ts";
import {Northwind} from "./../data/northwind.ts";
import {bootstrap }    from 'angular2/platform/browser'

declare var jQuery: any;
@Component({
	selector: 'my-app',
	templateUrl: "./igComboTemplate.html",
	directives: [IgComboComponent]
})
export class AppComponent {
	private options: IgCombo;
	private northwind: any;
	private combo: any;

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