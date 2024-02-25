import {Module} from "@nestjs/common";
import {ProductService} from "./product.service";
import {ProductsController} from "./products.controller";
import {ProductsEntity} from "../../Entities/Products.entity";
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([
    ProductsEntity
  ]),],
  controllers: [ProductsController],
  providers: [ProductService],
})
export class ProductModule {}
