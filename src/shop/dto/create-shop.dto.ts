import { Field, InputType } from '@nestjs/graphql';
import { Product } from '../../product/entities/product.entity';

@InputType()
export class CreateShopDto {
  @Field()
  name: string;

  //@Field()
  //products: Product[];
}
