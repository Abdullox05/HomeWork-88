import { PartialType } from '@nestjs/mapped-types';
import { CreateShopDto } from './create-shop.dto';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateShopDto extends PartialType(CreateShopDto) {
  @Field({nullable: true})
  name?: string;
}
