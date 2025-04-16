import { Component, OnInit } from '@angular/core';
import { Northwind } from '../shared/northwind';

declare var jQuery: any;

@Component({
    selector: 'app-grid-excel-exporting',
    templateUrl: './grid-excel-exporting.component.html',
    styleUrls: ['./grid-excel-exporting.component.css'],
    standalone: false
})
export class GridExcelExportingComponent {

    public gridOptions: IgGrid;
    public id: string;
    public data: any;

    constructor() {
      this.data = Northwind.getData();

      this.id = 'grid1';

      this.gridOptions = {
        autoCommit: true,
        width: '100%',
        height: '400px',
        autoGenerateColumns: false,
        columns: [
          {
            key: 'ProductID',
            headerText: 'Product ID',
            width: '50px',
            dataType: 'number'
          },
          {
            key: 'ProductName',
            headerText: 'Name',
            width: '350px',
            dataType: 'string'
          },
          {
            key: 'QuantityPerUnit',
            headerText: 'Quantity per unit',
            width: '250px',
            dataType: 'string'
          },
          {
            key: 'UnitPrice',
            headerText: 'Unit Price',
            width: '100px',
            dataType: 'number',
            template: jQuery('#colTmpl').html()
          }
        ],
        primaryKey: 'ProductID',
        features: [
          {
            name: 'Updating',
            columnSettings: [{ columnKey: 'ProductID', readOnly: true }]
          },
          {
            name: 'Sorting'
          }
        ]
      };
    }

    public exportExcelGrid() {
      jQuery.ig.GridExcelExporter.exportGrid($('#grid1'), {
        fileName: 'igGrid',
        gridStyling: $('#styling').igCheckboxEditor('value') ? 'applied' : 'none',
        gridFeatureOptions: {
          sorting: $('#sorting').igCheckboxEditor('value') ? 'applied' : 'none'
        }
      });
    }

}
