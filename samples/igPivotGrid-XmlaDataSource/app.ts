import {Component, Inject, ElementRef, EventEmitter, HostListener} from 'angular2/core';
import {IgPivotDataSelectorComponent, IgPivotGridComponent} from "../../src/igniteui.angular2.ts";
import {bootstrap }    from 'angular2/platform/browser'

declare var jQuery: any;
@Component({
	selector: 'my-app',
	templateUrl: "./igPivotGrid-XmlaDataSourceTemplate.html",
	directives: [IgPivotDataSelectorComponent, IgPivotGridComponent]
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

bootstrap(AppComponent);