import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { Field, InputType } from '@nestjs/graphql';
import { Category } from '../../category/entities/category.entity';

@InputType()
export class UpdateProductDto extends PartialType(CreateProductDto) {
  @Field({nullable: true})
  name?: string;
  
  @Field({nullable: true})
  image?: string;

  @Field({nullable: true})
  price?: number;

  //@Field({nullable: true})
  //category?: Category;
}
