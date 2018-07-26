import { Component, NgModule } from '@angular/core';
import { IgPivotDataSelectorComponent, IgPivotGridComponent } from "../../src/main";
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic }	from '@angular/platform-browser-dynamic';

declare var jQuery: any;
@Component({
	selector: 'my-app',
	templateUrl: "./igPivotGrid-XmlaDataSourceTemplate.html"
})
export class AppComponent {
	private optsGrid: IgPivotGrid;
	private optsSelector: IgPivotDataSelector;
	private selectorId: string;
	private gridId: string;
	private data: any;

	constructor() {
		this.data =  new jQuery.ig.OlapXmlaDataSource({
			serverUrl: 'http://sampledata.infragistics.com/olap/msmdpump.dll',
			catalog: 'Adventure Works DW Standard Edition',
			cube: 'Adventure Works',
			rows: "[Ship Date].[Calendar]",
			columns: "[Delivery Date].[Calendar]",
			measures: "[Measures].[Product Gross Profit Margin Status],[Measures].[Product Gross Profit Margin Goal]",
		});

		this.selectorId = "dataSelector";
		this.gridId = "pivotGrid";

		this.optsGrid = {
			dataSource: this.data,
			height: "650px"
		};

		this.optsSelector = {
			dataSource: this.data,
			height: "650px",
			width: "30%"
		};
	}
}

@NgModule({
	imports:	  [ BrowserModule ],
	declarations: [ AppComponent, IgPivotDataSelectorComponent, IgPivotGridComponent ],
	bootstrap:	[ AppComponent ]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);