import {Component, Inject, ElementRef, EventEmitter, HostListener} from 'angular2/core';
import {IgGridComponent} from "../../src/igniteui.angular2.ts";
import {Northwind} from "./../data/northwind.ts";
import {bootstrap }    from 'angular2/platform/browser';

declare var jQuery: any;
@Component({
	selector: 'my-app',
	templateUrl: "./igGridTemplate.html",
	directives: [IgGridComponent]
})
export class AppComponent {
	private gridOptions: IgGrid;
	private id: string;
	private data: any;
	private newProduct:any;
	//private deleteRecord: any;

	constructor() {
		this.data = Northwind.getData();

		this.id ='grid1';
		this.newProduct = this.createNewProduct();

		this.gridOptions = {
			autoCommit:true,
			dataSource: this.data,
			width: "100%",
			height: "400px",
			autoGenerateColumns: false,
			columns: [
				{ key: "ProductID", headerText: "Product ID", width:"50px", dataType:"number" },
				{ key: "ProductName", headerText: "Name", width:"250px", dataType:"string" },
				{ key: "QuantityPerUnit", headerText: "Quantity per unit", width:"250px", dataType:"string" },
				{ key: "UnitPrice", headerText: "Unit Price", width:"100px", dataType:"number", template: jQuery("#colTmpl").html() }
			],
			primaryKey: "ProductID",
			features:[
				{
					name: "Updating",
					columnSettings: [
						{ columnKey: "ProductID", readOnly: true }
					]
				},
				{
					name: "Paging"
				},
				{
					name: "Filtering"
				},
				{
					name: "Sorting"
				}
			]
		};
	}

	createNewProduct() {
		var newProduct = {};
		newProduct["ProductID"] = this.data.length + 1;
		newProduct["ProductName"] = null;
		newProduct["QuantityPerUnit"] = null;
		newProduct["UnitPrice"] = null;
		return newProduct;
	}

	addRecord() {
		this.data.push(this.newProduct);
		this.newProduct = this.createNewProduct();
	};
	
	deleteRecord(val) {
		var ind = 0;
		this.data.filter(function( item, index ) {
			if(item["ProductID"] === val) {
				ind= index
			};
			return item["ProductID"] === val;
		});
		this.data.splice(ind, 1);
	};
}

bootstrap(AppComponent);