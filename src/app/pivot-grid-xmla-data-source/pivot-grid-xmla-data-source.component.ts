import { Component } from '@angular/core';

@Component({
  selector: 'app-pivot-grid-xmla-data-source',
  templateUrl: './pivot-grid-xmla-data-source.component.html',
  styleUrls: ['./pivot-grid-xmla-data-source.component.css']
})
export class PivotGridXmlaDataSourceComponent {

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
