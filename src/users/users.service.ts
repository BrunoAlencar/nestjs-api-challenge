import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schema/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectModel(User.name)
    private userModelSoftDelete: SoftDeleteModel<UserDocument>,
  ) {}

  async create(createCatDto: CreateUserDto): Promise<User> {
    const createdCat = new this.userModel(createCatDto);
    return createdCat.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async updatePassword(updateUserDto): Promise<User> {
    const user = this.userModel.findOne({ email: updateUserDto.email });

    if (!user) {
      throw 'User not found';
    }

    await user.findOneAndUpdate(updateUserDto);

    return user;
  }

  async softDelete(id): Promise<number> {
    const deleted = await this.userModelSoftDelete.softDelete({ _id: id });

    return deleted;
  }
}
