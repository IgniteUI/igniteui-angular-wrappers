import {Component, Inject, ElementRef, EventEmitter, HostListener} from 'angular2/core';
import {IgHierarchicalGridComponent} from "../../src/igniteui.angular2.ts";
import {NorthwindEmployees} from "./../data/northwind-employees.ts";
import {bootstrap }    from 'angular2/platform/browser'

declare var jQuery: any;
@Component({
	selector: 'my-app',
	templateUrl: "./igHierarchicalGridTemplate.html",
	directives: [IgHierarchicalGridComponent]
})
export class AppComponent {
	private hgridOptions: IgHierarchicalGrid;
	private id: string;
	private data: any;
	private newProduct:any;

	constructor() {
		this.data = NorthwindEmployees.getData();

		this.id ='hgrid1';

		this.hgridOptions = {
			autoCommit:true,
			dataSource: this.data,
			width: "100%",
			height: "400px",
			autoGenerateColumns: false,
			autoGenerateColumnLayouts: false,
			columns: [
				{ key: "FirstName", headerText: "First Name", width:"25%", dataType:"string" },
				{ key: "LastName", headerText: "Last Name", width:"25%", dataType:"string" },
				{ key: "Title", headerText: "Title", width:"25%", dataType:"string" },
				{ key: "BirthDate", headerText: "Birth Date", width:"25%", dataType:"date" }
			],
			columnLayouts: [
				{
					key: "Orders",
					responseDataKey: "results",
					primaryKey: "OrderID",
					autoGenerateColumns: false,
					width: "100%",
					columns: [
						{ key: "OrderID", headerText: "OrderID", width:"25%", dataType:"string" },
						{ key: "Freight", headerText: "Freight", width:"25%", dataType:"string" },
						{ key: "ShipName", headerText: "ShipName", width:"25%", dataType:"string" },
						{ key: "ShipAddress", headerText: "ShipAddress", width:"25%", dataType:"string" }
					],
					features: [
						{
							name: "Paging",
							pageSize: "10"
						}
					]
				}
			]
		};
	}
}

bootstrap(AppComponent);