import { Component, NgModule, ViewChild } from '@angular/core';
import { IgGridComponent, Column, Features, IgGridPagingFeature, IgGridSelectionFeature, IgGridFilteringFeature, IgComboComponent,
	 IgTextEditorComponent, IgNumericEditorComponent, IgDateEditorComponent } from "../../src/igniteui.angular2";
import { FormsModule } from '@angular/forms';
import { Northwind } from "./../data/northwind";
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic }	from '@angular/platform-browser-dynamic';

declare var jQuery: any;

@Component({
	selector: 'my-app',
	templateUrl: "./igGrid-APIMethodsTemplate.html"
})
export class AppComponent {
	private cols: Array<any>;
	private id: string;
	private data: any;
	private pKey: string;
	private filteringConditions:Array<any>;
	private pageSizes:Array<any>;
	private pageIndexes:Array<any>;
	private filterColType: string;
	private currPageSize: number;

 	  @ViewChild("grid") grid: IgGridComponent;
	  @ViewChild("columnsCombo") columnsCombo: IgComboComponent;
	  @ViewChild("condCombo") condCombo: IgComboComponent;
	  @ViewChild("exprEditor") strExprEditor: IgTextEditorComponent;
	  @ViewChild("exprEditor") numExprEditor: IgNumericEditorComponent;
	  @ViewChild("selectionEditor") selectionEditor: IgNumericEditorComponent;
	  

	constructor() {
		this.data = Northwind.getData();
		this.filterColType = "number";
		this.currPageSize = 2;

		this.id ='grid1';

		this.cols = [
			{ key: "ProductID", headerText: "Product ID", width:"50px", dataType:"number" },
			{ key: "ProductName", headerText: "Name", width:"250px", dataType:"string" },
			{ key: "QuantityPerUnit", headerText: "Quantity per unit", width:"250px", dataType:"string" },
			{ key: "UnitPrice", headerText: "Unit Price", width:"100px", dataType:"number" }
		];

		this.filteringConditions = [{ cond: "equals", text: jQuery.ig.GridFiltering.locale.equalsLabel },
                        { cond: "doesNotEqual", text: jQuery.ig.GridFiltering.locale.doesNotEqualLabel },
                        { cond: "lessThan", text: jQuery.ig.GridFiltering.locale.lessThanLabel },
                        { cond: "greaterThan", text: jQuery.ig.GridFiltering.locale.greaterThanLabel }];

		this.pageSizes = [{value:2}, {value:5}, {value: 10},{value: 25}];
		this.pageIndexes = [];
		for(var i = 0; i < Math.ceil(this.data.length/this.currPageSize) ; i++){
				this.pageIndexes.push({value: i+1});
		}
		
	}
	columnSelChanged(evt) {
		this.filterColType = evt.ui.items[0].data.dataType;
		switch (this.filterColType) {
			case "number":
				this.filteringConditions = [{ cond: "equals", text: jQuery.ig.GridFiltering.locale.equalsLabel },
                        { cond: "doesNotEqual", text: jQuery.ig.GridFiltering.locale.doesNotEqualLabel },
                        { cond: "lessThan", text: jQuery.ig.GridFiltering.locale.lessThanLabel },
                        { cond: "greaterThan", text: jQuery.ig.GridFiltering.locale.greaterThanLabel }];
				break;
		case "string":
				this.filteringConditions = [
                                { cond: "startsWith", text: jQuery.ig.GridFiltering.locale.startsWithLabel },
                                { cond: "endsWith", text: jQuery.ig.GridFiltering.locale.endsWithLabel },
                                { cond: "contains", text: jQuery.ig.GridFiltering.locale.containsLabel },
                                { cond: "doesNotContain", text: jQuery.ig.GridFiltering.locale.doesNotContainLabel },
                                { cond: "empty", text: jQuery.ig.GridFiltering.locale.emptyNullText },
                                { cond: "notEmpty", text: jQuery.ig.GridFiltering.locale.notEmptyNullText }
                            ];
			break;
			case "date":
					this.filteringConditions = [
                                { cond: "on", text: jQuery.ig.GridFiltering.locale.onLabel },
                                { cond: "notOn", text: jQuery.ig.GridFiltering.locale.notOnLabel },
                                { cond: "before", text: jQuery.ig.GridFiltering.locale.beforeLabel },
                                { cond: "after", text: jQuery.ig.GridFiltering.locale.afterLabel },
                                { cond: "today", text: jQuery.ig.GridFiltering.locale.todayLabel },
                                { cond: "yesterday", text: jQuery.ig.GridFiltering.locale.yesterdayLabel },
                                { cond: "lastMonth", text: jQuery.ig.GridFiltering.locale.lastMonthLabel },
                                { cond: "nextMonth", text: jQuery.ig.GridFiltering.locale.nextMonthLabel },
                                { cond: "thisMonth", text: jQuery.ig.GridFiltering.locale.thisMonthLabel },
                                { cond: "lastYear", text: jQuery.ig.GridFiltering.locale.lastYearLabel },
                                { cond: "thisYear", text: jQuery.ig.GridFiltering.locale.thisYearLabel },
                                { cond: "nextYear", text: jQuery.ig.GridFiltering.locale.nextYearLabel }
                            ];
				break;
		}
		
	}
	filter(){
		var colKey = this.columnsCombo.selectedItems()[0].data.key;
		var colType =  this.columnsCombo.selectedItems()[0].data.dataType;

		if(!this.condCombo.selectedItems() ){
			var fElem = this.condCombo.itemsFromIndex(0);
			this.condCombo.select(fElem.element);
		}
		var condition = this.condCombo.value();

		var expr;
		switch (colType) {
			case "string":
			expr = this.strExprEditor.displayValue();
				break;
			case "number":
			expr = this.numExprEditor.value();
			break;
		}
		this.grid.featuresList.filtering.filter([{fieldName: colKey, expr: expr, cond: condition, logic: "AND"}],true);
		this.reCalcPageIndexes();
	}

	pageIndexChanged(evt){
		var index = parseInt(evt.ui.items[0].data.value.toString());
		this.grid.featuresList.paging.pageIndex(index-1);
	}
	pageSizeChanged(evt){
		var size = parseInt(evt.ui.items[0].data.value.toString());
		this.grid.featuresList.paging.pageSize(size);
		this.currPageSize = size;
		//re-generate page indexes values
		this.reCalcPageIndexes();
	}

	reCalcPageIndexes(){
		var indexes = [];
		for(var i = 0; i < Math.ceil(this.grid.widget().data("igGrid").dataSource._filteredData.length/this.currPageSize) ; i++){
				indexes.push({value: i+1});
		}
		this.pageIndexes = indexes;
	}

	selectRow(){
		var selectIndex = this.selectionEditor.value();
		this.grid.featuresList.selection.selectRow(selectIndex);
	}
}

@NgModule({
	imports:	  [ BrowserModule, FormsModule ],
	declarations: [ AppComponent, IgGridComponent, Column, Features, IgGridPagingFeature, IgGridSelectionFeature,
	 IgGridFilteringFeature, IgComboComponent, IgTextEditorComponent, IgNumericEditorComponent, IgDateEditorComponent ],
	bootstrap:	[ AppComponent ]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);