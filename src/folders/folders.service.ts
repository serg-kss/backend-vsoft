import { Injectable } from '@nestjs/common';
import { IFolder } from './interfaces/folder';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateFolderDto } from './dto/create-folder.dto';
import { UpdateFolderDto } from './dto/update-folder.dto';

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

    update(id: string, updateFolderDto: UpdateFolderDto) {
      const filter = { id_folder: id };
      return this.folderModel.updateOne(filter,updateFolderDto);
    }
  
    async remove(id: string) {
      const filter  = { id_folder: id };  
      await this.folderModel.deleteOne(filter);
      return this.folderModel.find().exec();
    }
}
