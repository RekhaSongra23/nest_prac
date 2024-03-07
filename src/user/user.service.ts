import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.schema';
import mongoose from 'mongoose';
import { UserDto } from './userdto';
import { UserUpdateDto } from './userupdatedto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: mongoose.Model<User>,
  ) {}

  // async createUser(UserDto: UserDto): Promise<User> {
  //   const res = await this.userModel.create(UserDto);
  //   return res;
  // }

  async findAllUser(): Promise<User[]> {
    const finduser = await this.userModel.find();
    return finduser;
  }

  async findUserByid(id: mongoose.Types.ObjectId): Promise<User> {
    const findbyid = await this.userModel.findById(id);
    return findbyid;
  }
  async updateUserByid(
    id: mongoose.Types.ObjectId,
    userupdatedto: UserUpdateDto,
  ): Promise<User> {
    const updateUser = await this.userModel.findByIdAndUpdate(
      id,
      userupdatedto,
      { new: true },
    );

    if (!updateUser) {
      throw new NotFoundException(`user with this${id} not found`);
    }
    return updateUser;
  }

  async deleteUserByid(id: mongoose.Types.ObjectId) {
    const deleUser = await this.userModel.findOneAndDelete(id);

    if (!deleUser) {
      throw new NotFoundException(`User with this ${id} not found`);
      return deleUser;
    }
  }
}
