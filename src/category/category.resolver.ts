import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CategoryService } from './category.service';
import { Category } from './entities/category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Resolver('category')
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Query(() => [Category])
  async getAllCategories() {
    return this.categoryService.findAll();
  }

  @Query(() => Category)
  async getOneCategory(@Args('id', {type: () => ID}) id: string) {
    return this.categoryService.findOne(+id);
  }

  @Mutation(() => Category)
  async createCategory(@Args("createCategory") createCategoryDto: CreateCategoryDto) {
    return this.categoryService.create(createCategoryDto);
  }

  @Mutation(() => Category)
  async updateCategory(@Args('id', {type: () => ID}) id: string, @Args("updateCategory") updateCategoryDto: UpdateCategoryDto) {
    return this.categoryService.update(+id, updateCategoryDto);
  }

  @Mutation(() => Number)
  async removeCategory(@Args('id', {type: () => ID}) id: string) {
    return this.categoryService.remove(+id);
  }
}
