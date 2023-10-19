import { Field, InputType } from '@nestjs/graphql';
import { Category } from '../../category/entities/category.entity';

@InputType()
export class CreateProductDto {
  @Field()
  name: string;
  
  @Field({nullable: true})
  image: string;

  @Field()
  price: number;

  //@Field()
  //category: Category;
}
