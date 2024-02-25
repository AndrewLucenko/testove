import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {ProductService} from "./services/product.service";

export interface ProductsInterface {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductController {
  private productsSubject: BehaviorSubject<ProductsInterface[]> = new BehaviorSubject<ProductsInterface[]>([]);
  public products$: Observable<ProductsInterface[]> = this.productsSubject.asObservable();

  constructor(private readonly appService: ProductService)  {
    this.appService.fetchProducts().subscribe(products => {
      this.productsSubject.next(products);
    });
  }

  addProduct(product: ProductsInterface): void {
    const currentProducts = this.productsSubject.value;
    this.appService.addProduct(product).subscribe(
      (newProduct) => {
        const updatedProducts = [...currentProducts, newProduct];
        this.productsSubject.next(updatedProducts);
      }
    );
  }

  getProducts(): Observable<ProductsInterface[]> {
    return this.products$;
  }

  updateProduct(updatedProduct: ProductsInterface): void {
    const currentProducts = this.productsSubject.value;
    const productIndex = currentProducts.findIndex(product => product.id === updatedProduct.id);
    if (productIndex !== -1) {
      this.appService.updateProduct(updatedProduct).subscribe(
        (updatedProduct) => {
          const updatedProducts = currentProducts.map(product =>
            product.id === updatedProduct.id ? updatedProduct : product
          );
          this.productsSubject.next(updatedProducts);
        }
      );
    }
  }

  deleteProduct(productId: string): void {
    const currentProducts = this.productsSubject.value;
    this.appService.deleteProduct(productId).pipe().subscribe(
      () => {
        const updatedProducts = currentProducts.filter(product => product.id != productId);
        this.productsSubject.next(updatedProducts);
      }
    );
  }
}
