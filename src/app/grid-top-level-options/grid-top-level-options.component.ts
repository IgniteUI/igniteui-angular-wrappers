import { Component, OnInit } from '@angular/core';
import { Northwind } from '../shared/northwind';

@Component({
    selector: 'app-grid-top-level-options',
    templateUrl: './grid-top-level-options.component.html',
    styleUrls: ['./grid-top-level-options.component.css'],
    standalone: false
})
export class GridTopLevelOptionsComponent {

  public cols: Array<any>;
  public id: string;
  public data: any;
  public w: string;
  public h: string;
  public pKey: string;

  constructor() {
    this.data = Northwind.getData();

    this.id = 'grid1';
    this.w = '100%';
    this.h = '400px';
    this.pKey = 'ProductID';

    this.cols = [
      { key: 'ProductID', headerText: 'Product ID', width: '50px', dataType: 'number' },
      { key: 'ProductName', headerText: 'Name', width: '250px', dataType: 'string' },
      { key: 'QuantityPerUnit', headerText: 'Quantity per unit', width: '250px', dataType: 'string' },
      { key: 'UnitPrice', headerText: 'Unit Price', width: '100px', dataType: 'number' }
    ];
  }

}
