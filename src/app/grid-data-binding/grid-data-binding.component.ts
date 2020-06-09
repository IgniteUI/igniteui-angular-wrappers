import { Component, ViewChild } from '@angular/core';
import { IgGridComponent } from 'projects/igniteui-angular-wrappers/src/public-api';
import { Northwind } from '../shared/northwind';

@Component({
    selector: 'app-grid-data-binding',
    templateUrl: './grid-data-binding.component.html',
    styleUrls: ['./grid-data-binding.component.css']
})
export class GridDataBindingComponent {

    public gridOptions: IgGrid;
    public id: string;
    public data: any;
    public newProduct: any;
    @ViewChild('grid1', { static: true }) grid: IgGridComponent;
    // private deleteRecord: any;

    constructor() {
        this.data = Northwind.getData();

        this.id = 'grid1';
        this.newProduct = this.createNewProduct();

        this.gridOptions = {
            autoCommit: true,
            width: '100%',
            height: '400px',
            autoGenerateColumns: false,
            columns: [
                { key: 'ProductID', headerText: 'Product ID', width: '50px', dataType: 'number' },
                { key: 'ProductName', headerText: 'Name', width: '250px', dataType: 'string' },
                { key: 'QuantityPerUnit', headerText: 'Quantity per unit', width: '250px', dataType: 'string' },
                { key: 'UnitPrice', headerText: 'Unit Price', width: '100px', dataType: 'number', template: jQuery('#colTmpl').html() }
            ],
            primaryKey: 'ProductID',
            features: [
                {
                    name: 'Updating',
                    columnSettings: [
                        { columnKey: 'ProductID', readOnly: true }
                    ]
                },
                {
                    name: 'Paging',
                    pageSize: 10
                },
                {
                    name: 'Filtering'
                },
                {
                    name: 'Sorting'
                }
            ]
        };
    }

    createNewProduct() {
        const newProduct = {};
        newProduct.ProductID = this.data.length + 1;
        newProduct.ProductName = null;
        newProduct.QuantityPerUnit = null;
        newProduct.UnitPrice = null;
        return newProduct;
    }

    addRecord() {
        this.data.push(this.newProduct);
        this.newProduct = this.createNewProduct();
    }

    deleteRecord(val) {
        let ind = 0;
        this.data.filter(function(item, index) {
            if (item.ProductID === val) {
                ind = index;
            }
            return item.ProductID === val;
        });
        this.data.splice(ind, 1);
    }

}
