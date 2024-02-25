import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ProductsInterface} from "../product.controler";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  fetchProducts(): Observable<ProductsInterface[]> {
    return this.http.get<ProductsInterface[]>(this.apiUrl + '/products')
  }

  addProduct(product: ProductsInterface): Observable<ProductsInterface> {
    return this.http.post<ProductsInterface>(this.apiUrl + '/product', { product });
  }

  updateProduct(product: ProductsInterface): Observable<ProductsInterface> {
    return this.http.put<ProductsInterface>(this.apiUrl + '/product', { product });
  }

  deleteProduct(productId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/product`, {params: {productId}});
  }
}
