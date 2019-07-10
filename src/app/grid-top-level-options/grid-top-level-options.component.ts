import { Component, OnInit } from '@angular/core';
import { Northwind } from '../shared/northwind';

@Component({
  selector: 'app-grid-top-level-options',
  templateUrl: './grid-top-level-options.component.html',
  styleUrls: ['./grid-top-level-options.component.css']
})
export class GridTopLevelOptionsComponent {

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
