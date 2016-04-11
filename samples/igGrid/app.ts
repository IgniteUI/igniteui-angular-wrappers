import {Component, Inject, ElementRef, EventEmitter, HostListener} from 'angular2/core';
import {IgGridComponent} from "../../src/igniteui.angular2.ts";
import {Northwind} from "./../data/northwind.ts";
import {bootstrap }    from 'angular2/platform/browser'

declare var jQuery: any;
@Component({
	selector: 'my-app',
	template: `		
		<div class="row">
			<div class="col-md-8">
				<ig-grid [(options)]="gridOptions" [(widgetId)]='id'></ig-grid>
			</div>
			<div class="col-md-4">
				<h3>Add Product</h3>
				<div class="well well-sm">
					<input type="text" [(ngModel)]="newProduct.ProductName" class="form-control" placeholder="name">
					<input type="text" [(ngModel)]="newProduct.QuantityPerUnit" class="form-control" placeholder="quantity per unit">
					<input type="number" [(ngModel)]="newProduct.UnitPrice" class="form-control" placeholder="unit price">
					<input type="button" value="Add" (click)="addRecord()" class="btn btn-default"/>
				</div>
			</div>
		</div>

		<hr/>
		<table id="simpletable" class="table table-striped table-hover">
			<thead>
				<tr>
					<th>Product ID</th>
					<th>Name</th>
					<th>Quantity per unit</th>
					<th>Unit Price</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				<tr *ngFor="#product of data">
					<td>{{product.ProductID}}</td>
					<td><input type="text" [(ngModel)]="product.ProductName" class="form-control" /></td>
					<td>{{product.QuantityPerUnit}}</td>
					<td> <input type="number" [(ngModel)]="product.UnitPrice" class="form-control" /> </td>
					<td><input type="button" value="Delete" (click)="deleteRecord(product.ProductID)" class="btn btn-default"/></td>
				</tr>
			</tbody>
		</table>
		`,
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