import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUser } from './interfaces/user';
import { CreateUserDto } from './dto/create-user.dto';


@Injectable()
export class UsersService {
   constructor(@InjectModel('User') private readonly userModel: Model<IUser>){}

   async create(createUserDto: CreateUserDto): Promise<IUser>  {
      const createdUser = new this.userModel(createUserDto);
      return createdUser.save();
    }
  
    async findAll(): Promise<IUser[]> {
      return this.userModel.find().exec();
    }

}
