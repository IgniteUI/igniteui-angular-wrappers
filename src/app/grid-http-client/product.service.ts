import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
    constructor(private http: HttpClient) { }

    getAll(): Observable<Product[]> {
        const people$ = this.http
            .get<Product[]>('app/products');
        return people$;
    }

    addProduct(id, ProductName, DealerName, CategoryName, InStock): Observable<Product> {
        const newProduct: Product =  { id, ProductName, DealerName, CategoryName, InStock } as Product;
        const headers = new HttpHeaders({ 'Content-Type': 'application/json', Authorization: 'my-auth-token' });
        return this.http.post<Product>('app/products', newProduct, {headers});
    }
}
