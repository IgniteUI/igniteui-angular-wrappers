import { Component, Injectable, NgModule } from '@angular/core';
import { IgGridComponent } from "../../src/igniteui.angular2";
import { Http, Response, HttpModule } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProductData } from '../data/product-data';

declare var jQuery: any;


@Injectable()
export class ProductService {
    constructor(private http: Http) { }

    getAll() {
        let people$ = this.http
            .get("app/products").map((res: Response) => res.json());
        return people$;
    }

    addProduct(ProductID, ProductName, DealerName, CategoryName, InStock): Observable<any> {
        let body = JSON.stringify({ ProductID, ProductName, DealerName, CategoryName, InStock });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post("app/products", body, options)
            .map(this.extractData);
    }


    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    }

    private handleError (error: any) {
        let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}

@Component({
    selector: 'my-app',
    templateUrl: "./igGrid-HTTPClientTemplate.html",
    providers: [ProductService]
})
export class AppComponent {
    private gridOptions: IgGrid;
    private id: string;
    private products: any = [];
    errorMessage: string;
    private newId: number;

    constructor(private productService: ProductService) {
        this.productService.getAll().subscribe(
            res => {
                this.products = res.data;
                this.newId = this.products.length;
            },
            error =>  this.errorMessage = <any>error
        );

        this.id = 'grid1';

        this.gridOptions = {
            autoCommit: true,
            width: "100%",
            height: "400px",
            autoGenerateColumns: false,
            primaryKey: "ProductID",
            columns: [
                { key: "ProductID", headerText: "Product ID", width: "15%", dataType: "number" },
                { key: "ProductName", headerText: "Name", width: "35%", dataType: "string" },
                { key: "DealerName", headerText: "Dealer Name", width: "15%", dataType: "string" },
                { key: "CategoryName", headerText: "CategoryName", width: "25%", dataType: "string" },
                { key: "InStock", headerText: "InStock", width: "15%", dataType: "number" }
            ],
            features: [
                {
                    name: "Updating",
                    editMode: "none",
                    enableAddRow: false,
                    enableDeleteRow: false
                }
            ]
        }
    }

    addProduct(newProductName, newDealerName, newCategoryName, newInStock) {
        this.newId++;
        this.productService.addProduct(this.newId, newProductName, newDealerName, newCategoryName, newInStock)
            .subscribe(
                product => this.products.push(product),
                error =>  this.errorMessage = <any>error
            );
    }
}

@NgModule({
  imports:      [ BrowserModule, HttpModule, InMemoryWebApiModule.forRoot(ProductData) ],
  declarations: [ AppComponent, IgGridComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);