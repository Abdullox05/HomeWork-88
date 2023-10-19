import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductService } from './product.service';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Resolver('product')
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Query(() => [Product])
  async getAllProducts() {
    return this.productService.findAll();
  }

  @Query(() => Product)
  async getOneProduct(@Args('id', {type: () => ID}) id: string) {
    return this.productService.findOne(+id);
  }

  @Mutation(() => Product)
  async createProduct(@Args("createProduct") createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Mutation(() => Product)
  async updateProduct(@Args('id', {type: () => ID}) id: string, @Args("updateProduct") updateProductDto: UpdateProductDto) {
    return this.productService.update(+id, updateProductDto);
  }

  @Mutation(() => Number)
  async removeProduct(@Args('id', {type: () => ID}) id: string) {
    return this.productService.remove(+id);
  }
}
