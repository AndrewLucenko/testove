import {Body, Controller, Delete, Get, Param, Post, Put, Query} from "@nestjs/common";
import {ProductService} from "./product.service";
import {ProductsInterface} from "../../Interfase/Products.interface";

@Controller()
export class ProductsController {
  constructor(private readonly productService: ProductService) {}

  @Get('products')
  async getProduct(): Promise<ProductsInterface[]> {
    return await this.productService.getProducts();
  }

  @Post('product')
  async createProduct(
    @Body('product') product: Omit<ProductsInterface, 'id'>
  ): Promise<ProductsInterface> {
    return this.productService.createProducts(product);
  }

  @Put('product')
  async updateProduct(
    @Body('product') product: ProductsInterface,
): Promise<ProductsInterface> {
    return this.productService.updateProducts(product);
  }

  @Delete('product')
  async deleteProduct(
    @Query('productId') productId: string
  ): Promise<unknown> {
    return this.productService.deleteProducts(productId);
  }
}
