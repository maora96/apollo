import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./Product";

@Entity("categories")
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text" })
  product_type: string;

  @Column({ type: "float" })
  discount: number;

  @OneToMany(() => Product, (product) => product.category)
  products: Product[];
}
