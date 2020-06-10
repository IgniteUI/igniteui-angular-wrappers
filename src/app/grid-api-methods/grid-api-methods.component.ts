import { Component, OnInit, ViewChild } from '@angular/core';
import { IgGridComponent, IgComboComponent, IgTextEditorComponent, IgNumericEditorComponent } from 'projects/igniteui-angular-wrappers/src/public-api';
import { Northwind } from '../shared/northwind';

declare var jQuery: any;

@Component({
  selector: 'app-grid-api-methods',
  templateUrl: './grid-api-methods.component.html',
  styleUrls: ['./grid-api-methods.component.css']
})
export class GridApiMethodsComponent {

  public cols: Array<any>;
  public id: string;
  public data: any;
  public pKey: string;
  public filteringConditions: Array<any>;
  public pageSizes: Array<any>;
  public pageIndexes: Array<any>;
  public filterColType: string;
  public currPageSize: number;

  @ViewChild('grid', { static: true }) grid: IgGridComponent;
  @ViewChild('columnsCombo', { static: true }) columnsCombo: IgComboComponent;
  @ViewChild('condCombo', { static: true }) condCombo: IgComboComponent;
  @ViewChild('exprEditor') strExprEditor: IgTextEditorComponent;
  @ViewChild('exprEditor') numExprEditor: IgNumericEditorComponent;
  @ViewChild('selectionEditor', { static: true }) selectionEditor: IgNumericEditorComponent;


  constructor() {
    this.data = Northwind.getData();
    this.filterColType = 'number';
    this.currPageSize = 2;

    this.id = 'grid1';

    this.cols = [
      { key: 'ProductID', headerText: 'Product ID', width: '50px', dataType: 'number' },
      { key: 'ProductName', headerText: 'Name', width: '250px', dataType: 'string' },
      { key: 'QuantityPerUnit', headerText: 'Quantity per unit', width: '250px', dataType: 'string' },
      { key: 'UnitPrice', headerText: 'Unit Price', width: '100px', dataType: 'number' }
    ];

    this.filteringConditions = [{ cond: 'equals', text: jQuery.ig.GridFiltering.locale.equalsLabel },
    { cond: 'doesNotEqual', text: jQuery.ig.GridFiltering.locale.doesNotEqualLabel },
    { cond: 'lessThan', text: jQuery.ig.GridFiltering.locale.lessThanLabel },
    { cond: 'greaterThan', text: jQuery.ig.GridFiltering.locale.greaterThanLabel }];

    this.pageSizes = [{ value: 2 }, { value: 5 }, { value: 10 }, { value: 25 }];
    this.pageIndexes = [];
    for (let i = 0; i < Math.ceil(this.data.length / this.currPageSize); i++) {
      this.pageIndexes.push({ value: i + 1 });
    }

  }
  columnSelChanged(evt) {
    this.filterColType = evt.ui.items[0].data.dataType;
    switch (this.filterColType) {
      case 'number':
        this.filteringConditions = [{ cond: 'equals', text: jQuery.ig.GridFiltering.locale.equalsLabel },
        { cond: 'doesNotEqual', text: jQuery.ig.GridFiltering.locale.doesNotEqualLabel },
        { cond: 'lessThan', text: jQuery.ig.GridFiltering.locale.lessThanLabel },
        { cond: 'greaterThan', text: jQuery.ig.GridFiltering.locale.greaterThanLabel }];
        break;
      case 'string':
        this.filteringConditions = [
          { cond: 'startsWith', text: jQuery.ig.GridFiltering.locale.startsWithLabel },
          { cond: 'endsWith', text: jQuery.ig.GridFiltering.locale.endsWithLabel },
          { cond: 'contains', text: jQuery.ig.GridFiltering.locale.containsLabel },
          { cond: 'doesNotContain', text: jQuery.ig.GridFiltering.locale.doesNotContainLabel },
          { cond: 'empty', text: jQuery.ig.GridFiltering.locale.emptyNullText },
          { cond: 'notEmpty', text: jQuery.ig.GridFiltering.locale.notEmptyNullText }
        ];
        break;
      case 'date':
        this.filteringConditions = [
          { cond: 'on', text: jQuery.ig.GridFiltering.locale.onLabel },
          { cond: 'notOn', text: jQuery.ig.GridFiltering.locale.notOnLabel },
          { cond: 'before', text: jQuery.ig.GridFiltering.locale.beforeLabel },
          { cond: 'after', text: jQuery.ig.GridFiltering.locale.afterLabel },
          { cond: 'today', text: jQuery.ig.GridFiltering.locale.todayLabel },
          { cond: 'yesterday', text: jQuery.ig.GridFiltering.locale.yesterdayLabel },
          { cond: 'lastMonth', text: jQuery.ig.GridFiltering.locale.lastMonthLabel },
          { cond: 'nextMonth', text: jQuery.ig.GridFiltering.locale.nextMonthLabel },
          { cond: 'thisMonth', text: jQuery.ig.GridFiltering.locale.thisMonthLabel },
          { cond: 'lastYear', text: jQuery.ig.GridFiltering.locale.lastYearLabel },
          { cond: 'thisYear', text: jQuery.ig.GridFiltering.locale.thisYearLabel },
          { cond: 'nextYear', text: jQuery.ig.GridFiltering.locale.nextYearLabel }
        ];
        break;
    }

  }
  filter() {
    const colKey = this.columnsCombo.selectedItems()[0].data.key;
    const colType = this.columnsCombo.selectedItems()[0].data.dataType;

    if (!this.condCombo.selectedItems()) {
      const fElem = this.condCombo.itemsFromIndex(0);
      this.condCombo.select(fElem.element);
    }
    const condition = this.condCombo.value();

    let expr;
    switch (colType) {
      case 'string':
        expr = this.strExprEditor.displayValue();
        break;
      case 'number':
        expr = this.numExprEditor.value();
        break;
    }
    this.grid.featuresList.filtering.filter([{ fieldName: colKey, expr, cond: condition, logic: 'AND' }], true);
    this.reCalcPageIndexes();
  }

  pageIndexChanged(evt) {
    const index = parseInt(evt.ui.items[0].data.value.toString(), 10);
    this.grid.featuresList.paging.pageIndex(index - 1);
  }
  pageSizeChanged(evt) {
    const size = parseInt(evt.ui.items[0].data.value.toString(), 10);
    this.grid.featuresList.paging.pageSize(size);
    this.currPageSize = size;
    // re-generate page indexes values
    this.reCalcPageIndexes();
  }

  reCalcPageIndexes() {
    const indexes = [];
    for (let i = 0; i < Math.ceil(this.grid.widget().data('igGrid').dataSource.data().length / this.currPageSize); i++) {
      indexes.push({ value: i + 1 });
    }
    this.pageIndexes = indexes;
  }

  selectRow() {
    const selectIndex = this.selectionEditor.value();
    this.grid.featuresList.selection.selectRow(selectIndex);
  }

}
