import { Component } from '@angular/core';
import { Northwind } from '../shared/northwind';

@Component({
    selector: 'app-grid-complex-options',
    templateUrl: './grid-complex-options.component.html',
    styleUrls: ['./grid-complex-options.component.css']
})
export class GridComplexOptionsComponent {

    private cols: Array<any>;
    private id: string;
    private data: any;
    private w: string;
    private h: string;
    private pKey: string;
    private isReadOnly: boolean = true;
    private cs: Array<any> = [{ columnKey: "ProductID", readOnly: this.isReadOnly }];
    private pi: number = 0;
    private idHeaderText: string = "Id";
    private pages: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    constructor() {
        this.data = Northwind.getData();

        this.id = 'grid1';
        this.w = '100%';
        this.h = '400px';
        this.pKey = 'ProductID';

        this.cols = [
            { key: "ProductID", headerText: "Product ID", width: "50px", dataType: "number" },
            { key: "ProductName", headerText: "Name", width: "250px", dataType: "string" },
            { key: "QuantityPerUnit", headerText: "Quantity per unit", width: "250px", dataType: "string" },
            { key: "UnitPrice", headerText: "Unit Price", width: "100px", dataType: "number" }
        ];
    }

}
