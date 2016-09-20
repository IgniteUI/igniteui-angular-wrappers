import { Component, NgModule } from '@angular/core';
import { IgGridComponent } from "../../src/igniteui.angular2";
import { Northwind } from "./../data/northwind";
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic }	from '@angular/platform-browser-dynamic';

declare var jQuery: any;
@Component({
	selector: 'my-app',
	templateUrl: "./igGrid-TopLevelOptsTemplate.html"
})
export class AppComponent {
	private cols: Array<any>;
	private id: string;
	private data: any;
	private w: string;
	private h: string;
	private pKey: string;

	constructor() {
		this.data = Northwind.getData();

		this.id ='grid1';
		this.w = '100%';
		this.h = '400px';
		this.pKey = 'ProductID';

		this.cols = [
			{ key: "ProductID", headerText: "Product ID", width:"50px", dataType:"number" },
			{ key: "ProductName", headerText: "Name", width:"250px", dataType:"string" },
			{ key: "QuantityPerUnit", headerText: "Quantity per unit", width:"250px", dataType:"string" },
			{ key: "UnitPrice", headerText: "Unit Price", width:"100px", dataType:"number" }
		];
	}
}

@NgModule({
	imports:	  [ BrowserModule ],
	declarations: [ AppComponent, IgGridComponent ],
	bootstrap:	[ AppComponent ]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);