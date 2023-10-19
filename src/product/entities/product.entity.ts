import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  ManyToMany,
  JoinTable,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Category } from '../../category/entities/category.entity';

@ObjectType()
@Entity()
export class Product {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;
  
  @Field()
  @Column()
  name: string;

  @Field({nullable: true})
  @Column({nullable: true})
  image: string;

  @Field()
  @Column()
  price: number;

  //@ManyToOne(() => Category, category => category.products)
  //category: Category;

  //@ManyToMany(() => Shop, shop => shop.products)
  //@JoinTable()
  //shops: Shop[];

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;
}
