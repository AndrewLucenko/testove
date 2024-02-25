import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {ProductsEntity} from "../../Entities/Products.entity";
import { faker } from '@faker-js/faker';



@Injectable()
export class ADD_MOCKService {

  constructor(@InjectRepository(ProductsEntity) private productsRepository: Repository<ProductsEntity>,
  ) {
  }

  async createMock(): Promise<void> {

    for (let i = 0; i < 25; i++) {
      const mockProduct = this.productsRepository.create({
        name: faker.commerce.productName(),
        price: parseFloat(faker.commerce.price()),
        description: faker.commerce.productDescription(),
        quantity: faker.number.int({ min: 1, max: 100 }),
      });

      await this.productsRepository.save(mockProduct);
    }
  }
}
