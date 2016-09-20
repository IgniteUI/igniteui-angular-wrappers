import { Component, NgModule } from '@angular/core';
import { IgGridComponent, Column, Feature } from "../../src/igniteui.angular2";
import { FormsModule } from '@angular/forms';
import { Northwind } from "./../data/northwind";
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic }	from '@angular/platform-browser-dynamic';

declare var jQuery: any;

@Component({
	selector: 'my-app',
	templateUrl: "./igGrid-ComplexOptsTemplate.html"
})
export class AppComponent {
	private cols: Array<any>;
	private id: string;
	private data: any;
	private w: string;
	private h: string;
	private pKey: string;
	private isReadOnly: boolean = true;
	private cs: Array<any> = [{columnKey: "ProductID", readOnly: this.isReadOnly}];
	private pi: number = 0;
	private idHeaderText: string = "Id";
	private pages: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

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
	imports:	  [ BrowserModule, FormsModule ],
	declarations: [ AppComponent, IgGridComponent, Column, Feature ],
	bootstrap:	[ AppComponent ]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);