import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import {ProductsInterface} from "../Interfase/Products.interface";

@Entity('products')
export class ProductsEntity implements ProductsInterface {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  description: string;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  quantity: number;
}
