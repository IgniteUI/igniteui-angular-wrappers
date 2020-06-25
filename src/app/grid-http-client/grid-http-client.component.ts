import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-grid-http-client',
  templateUrl: './grid-http-client.component.html',
  styleUrls: ['./grid-http-client.component.css']
})
export class GridHttpClientComponent {

    public gridOptions: IgGrid;
    public id: string;
    public products: Product[] = [];
    errorMessage: string;
    public newId: number;

    constructor(private productService: ProductService) {
        this.productService.getAll().subscribe(
            res => {
                this.products = res;
                this.newId = this.products.length;
            },
            error =>  this.errorMessage = error as any
        );

        this.id = 'grid1';

        this.gridOptions = {
            autoCommit: true,
            width: '100%',
            height: '400px',
            autoGenerateColumns: false,
            primaryKey: 'id',
            columns: [
                { key: 'id', headerText: 'Product ID', width: '15%', dataType: 'number' },
                { key: 'ProductName', headerText: 'Name', width: '35%', dataType: 'string' },
                { key: 'DealerName', headerText: 'Dealer Name', width: '15%', dataType: 'string' },
                { key: 'CategoryName', headerText: 'CategoryName', width: '25%', dataType: 'string' },
                { key: 'InStock', headerText: 'InStock', width: '15%', dataType: 'number' }
            ],
            features: [
                {
                    name: 'Updating',
                    editMode: 'none',
                    enableAddRow: false,
                    enableDeleteRow: false
                }
            ]
        };
    }

    addProduct(newProductName, newDealerName, newCategoryName, newInStock) {
        this.newId++;
        this.productService.addProduct(this.newId, newProductName, newDealerName, newCategoryName, newInStock)
            .subscribe(product => this.products.push(product));
    }

}
