import { Injectable } from '@nestjs/common';
import { IFile } from './interfaces/file';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateFileDto } from './dto/create-file.dto';

@Injectable()
export class FilesService {
   constructor(@InjectModel('File') private fileModel: Model<IFile>){}

   async create(createFileDto: CreateFileDto): Promise<IFile[]>  {
      const createdFile = new this.fileModel(createFileDto);
      createdFile.save();
      return this.fileModel.find().exec();
    }
  
    async findAll(): Promise<IFile[]> {
      return this.fileModel.find().exec();
    }

    async findFilesInFolder(id: string) {
      const filter  = { id_folder: id };  
      return await this.fileModel.find(filter);
    }
}
