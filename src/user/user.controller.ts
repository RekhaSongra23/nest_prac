import { BadRequestException, Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserDto } from "./userdto";
import { User } from "./user.schema";
import mongoose from "mongoose";
import { UserUpdateDto } from "./userupdatedto";


@Controller('/user')
export class UserController {
  constructor(private readonly Userservice: UserService) {}

  @Post()
  async creteUsers(@Body() UserDto: UserDto): Promise<User> {
    const usercreation = await this.Userservice.createUser(UserDto);
    return usercreation;
  }

  @Get()
  async findAll() {
    const userss = await this.Userservice.findAllUser();
    return userss;
  }

  @Get(':id')
  async finduser(@Param('id') id: mongoose.Types.ObjectId) {
    const user1 = await this.Userservice.findUserByid(id);
    return user1;
  }

  @Put(':id')
  async updateusr(
    @Param('id') id: mongoose.Types.ObjectId,
    @Body() UserUpdateDto: UserUpdateDto,
  ) {
    try {
      const userup = await this.Userservice.updateUserByid(id, UserUpdateDto);
      return userup;
    } catch (err) {
      throw new NotFoundException(err);
    }
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: mongoose.Types.ObjectId) {
    try {
      const deletedUser1 = await this.Userservice.deleteUserByid(id);
      return deletedUser1;
    } catch (err) {
      throw new BadRequestException(err);
    }
  }
}