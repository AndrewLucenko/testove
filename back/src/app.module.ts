import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ProductModule} from "./app/Endpoints/Products/product.module";
import {TypeOrmModule} from "@nestjs/typeorm";
import {environment} from "../environment/environment";
import {ProductsEntity} from "./app/Entities/Products.entity";
import {ADD_MOCKModule} from "./app/Endpoints/ADD MOCK/ADD_MOCK.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: environment.host,
      port: environment.db_port,
      username: environment.db_user,
      password: environment.db_pass,
      database: environment.db_name,
      synchronize: true,
      entities: [ProductsEntity],
    }),
    ProductModule,
    ADD_MOCKModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
