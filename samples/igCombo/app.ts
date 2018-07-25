import { Component, NgModule } from '@angular/core';
import { IgComboComponent } from "../../src/main";
import { Northwind } from "./../data/northwind";
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic }    from '@angular/platform-browser-dynamic';
import { FormsModule } from '@angular/forms';

declare var jQuery: any;
@Component({
	selector: 'my-app',
	templateUrl: "./igComboTemplate.html"
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
			width: "100%"
		};
		this.combo = {
			value1: 20,
			value2: "Chang"
		}
	}
}

@NgModule({
	imports:      [ BrowserModule, FormsModule ],
	declarations: [ AppComponent, IgComboComponent ],
	bootstrap:    [ AppComponent ]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);