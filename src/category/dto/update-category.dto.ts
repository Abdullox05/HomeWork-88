import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoryDto } from './create-category.dto';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {
  @Field({nullable: true})
  name?: string;
  
  @Field({nullable: true})
  description?: string;
}
