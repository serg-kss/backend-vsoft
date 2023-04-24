import { Injectable } from '@nestjs/common';
import { IFolder } from './interfaces/folder';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateFolderDto } from './dto/create-folder.dto';

@Injectable()
export class FoldersService {
   constructor(@InjectModel('Folder') private folderModel: Model<IFolder>){}

   async create(createFolderDto: CreateFolderDto): Promise<IFolder>  {
      const createdFolder = new this.folderModel(createFolderDto);
      return createdFolder.save();
    }
  
    async findAll(): Promise<IFolder[]> {
      return this.folderModel.find().exec();
    }
}
