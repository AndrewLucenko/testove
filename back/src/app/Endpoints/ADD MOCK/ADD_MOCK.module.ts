import {Module} from "@nestjs/common";
import {ADD_MOCKService} from "./ADD_MOCK.service";
import {ADD_MOCKController} from "./ADD_MOCK.controller";
import {ProductsEntity} from "../../Entities/Products.entity";
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([
    ProductsEntity
  ]),],
  controllers: [ADD_MOCKController],
  providers: [ADD_MOCKService],
})
export class ADD_MOCKModule {}
