import {Component, Directive, Inject, ElementRef, EventEmitter, HostListener} from '@angular/core';
import {IgGridComponent, Column, Feature} from "../../src/igniteui.angular2.ts";
import {Northwind} from "./../data/northwind.ts";
import {bootstrap }    from '@angular/platform-browser-dynamic';
import {FORM_DIRECTIVES} from '@angular/common';

declare var jQuery: any;

@Component({
	selector: 'my-app',
	templateUrl: "./igGrid-ComplexOptsTemplate.html",
	directives: [FORM_DIRECTIVES, IgGridComponent, Column, Feature ]
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

bootstrap(AppComponent);