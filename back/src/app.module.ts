import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ProductModule} from "./app/Endpoints/Products/product.module";
import {TypeOrmModule} from "@nestjs/typeorm";
import {ProductsEntity} from "./app/Entities/Products.entity";
import {ADD_MOCKModule} from "./app/Endpoints/ADD MOCK/ADD_MOCK.module";
import {environment} from "../environment/environment";
import {ConfigModule} from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:   process.env.NODE_ENV === 'production' ? '.production.env' : '.develop.env'
      ,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
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
