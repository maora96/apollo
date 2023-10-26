import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Category } from "./Category";

@Entity("products")
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text" })
  name: string;

  @Column({ type: "text" })
  description: string;

  @Column({ type: "text" })
  color: string;

  @Column({ type: "float" })
  price: number;

  @Column({ type: "float" })
  promotional_price: number;

  @ManyToOne(() => Category, (category) => category.products)
  @JoinColumn({ name: "product_id" })
  category: Category;
}
