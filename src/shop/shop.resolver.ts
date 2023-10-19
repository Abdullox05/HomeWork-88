import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ShopService } from './shop.service';
import { Shop } from './entities/shop.entity';
import { CreateShopDto } from './dto/create-shop.dto';
import { UpdateShopDto } from './dto/update-shop.dto';

@Resolver('shop')
export class ShopResolver {
  constructor(private readonly shopService: ShopService) {}

  @Query(() => [Shop])
  async getAllShops() {
    return this.shopService.findAll();
  }

  @Query(() => Shop)
  async getOneShop(@Args('id', {type: () => ID}) id: string) {
    return this.shopService.findOne(+id);
  }

  @Mutation(() => Shop)
  async createShop(@Args("createShop") createShopDto: CreateShopDto) {
    return this.shopService.create(createShopDto);
  }

  @Mutation(() => Shop)
  async updateShop(@Args('id', {type: () => ID}) id: string, @Args("updateShop") updateShopDto: UpdateShopDto) {
    return this.shopService.update(+id, updateShopDto);
  }

  @Mutation(() => Number)
  async removeShop(@Args('id', {type: () => ID}) id: string) {
    return this.shopService.remove(+id);
  }
}
