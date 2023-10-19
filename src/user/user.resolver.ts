import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Resolver('user')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User])
  async getAllUsers() {
    return this.userService.findAll();
  }

  @Query(() => User)
  async grtOneUser(@Args('id', {type: () => ID}) id: string) {
    return this.userService.findOne(+id);
  }

  @Mutation(() => User)
  async createUser(@Args("createUser") createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Mutation(() => User)
  async updateUser(@Args('id', {type: () => ID}) id: string, @Args("updateUser") updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Mutation(() => Number)
  async removeUser(@Args('id', {type: () => ID}) id: string) {
    return this.userService.remove(+id);
  }
}
