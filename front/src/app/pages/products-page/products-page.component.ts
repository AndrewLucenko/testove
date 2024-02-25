import {Component, OnInit} from '@angular/core';
import {ListComponent} from "../../components/list/list.component";
import {HeaderComponent} from "../../components/header/header.component";
import {ProductController, ProductsInterface} from "../../core/product.controler";
import {Observable} from "rxjs";
import {HttpClientModule} from "@angular/common/http";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [
    ListComponent,
    HeaderComponent,
    HttpClientModule,
    AsyncPipe
  ],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.scss'
})
export class ProductsPageComponent implements OnInit{
  products$: Observable<ProductsInterface[]> = this.productController.products$;
  constructor(private readonly productController: ProductController) {
  }

  ngOnInit(): void {
    this.productController.getProducts();
  }

}
