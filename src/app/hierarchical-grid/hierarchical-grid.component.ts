import { Component } from '@angular/core';
import { NorthwindEmployees } from '../shared/northwind-emplyoees';

@Component({
    selector: 'app-hierarchical-grid',
    templateUrl: './hierarchical-grid.component.html',
    styleUrls: ['./hierarchical-grid.component.css'],
    standalone: false
})
export class HierarchicalGridComponent {

    public hgridOptions: IgHierarchicalGrid;
    public id: string;
    public data: any;
    public newProduct: any;

    constructor() {
        this.data = NorthwindEmployees.getData();

        this.id = 'hgrid1';

        this.hgridOptions = {
            autoCommit: true,
            dataSource: this.data,
            width: '100%',
            height: '400px',
            autoGenerateColumns: false,
            autoGenerateColumnLayouts: false,
            columns: [
                { key: 'FirstName', headerText: 'First Name', width: '25%', dataType: 'string' },
                { key: 'LastName', headerText: 'Last Name', width: '25%', dataType: 'string' },
                { key: 'Title', headerText: 'Title', width: '25%', dataType: 'string' },
                { key: 'BirthDate', headerText: 'Birth Date', width: '25%', dataType: 'date' }
            ],
            columnLayouts: [
                {
                    key: 'Orders',
                    responseDataKey: 'results',
                    primaryKey: 'OrderID',
                    autoGenerateColumns: false,
                    width: '100%',
                    columns: [
                        { key: 'OrderID', headerText: 'OrderID', width: '25%', dataType: 'string' },
                        { key: 'Freight', headerText: 'Freight', width: '25%', dataType: 'string' },
                        { key: 'ShipName', headerText: 'ShipName', width: '25%', dataType: 'string' },
                        { key: 'ShipAddress', headerText: 'ShipAddress', width: '25%', dataType: 'string' }
                    ],
                    features: [
                        {
                            name: 'Paging',
                            pageSize: '10'
                        }
                    ]
                }
            ]
        };
    }

}
