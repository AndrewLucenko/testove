import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {ProductsEntity} from "../../Entities/Products.entity";
import {ProductsInterface} from "../../Interfase/Products.interface";
import { faker } from '@faker-js/faker';

@Injectable()
export class ProductService {

  constructor(@InjectRepository(ProductsEntity) private productsRepository: Repository<ProductsEntity>,
  ) {
  }
  async getProducts(): Promise<ProductsInterface[]> {
    const dataProducts = await this.productsRepository.find();

    return dataProducts.sort((a, b) => a.id > b.id ? 1 : -1);
  }

  async createProducts(product: Omit<ProductsInterface, 'id'>): Promise<ProductsInterface> {
    const newProduct: ProductsInterface = { id: `${faker.number.int({ min: 25, max: 1147483647 })}`, ...product}

    return await this.productsRepository.save(newProduct);
  }

  async updateProducts(product: ProductsInterface): Promise<ProductsInterface> {
    return await this.productsRepository.save(product);
  }

  async deleteProducts(id: string): Promise<unknown> {
     return await this.productsRepository.delete({ id });
  }
}
