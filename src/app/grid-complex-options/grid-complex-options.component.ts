import { Component } from '@angular/core';
import { Northwind } from '../shared/northwind';

@Component({
    selector: 'app-grid-complex-options',
    templateUrl: './grid-complex-options.component.html',
    styleUrls: ['./grid-complex-options.component.css']
})
export class GridComplexOptionsComponent {

    public cols: Array<any>;
    public id: string;
    public data: any;
    public w: string;
    public h: string;
    public pKey: string;
    public isReadOnly: boolean = true;
    public cs: Array<any> = [{ columnKey: "ProductID", readOnly: this.isReadOnly }];
    public pi: number = 0;
    public idHeaderText: string = "Id";
    public pages: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

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
