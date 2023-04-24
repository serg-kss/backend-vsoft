import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FolderSchema } from './schemas/folder.schema';
import { FoldersController } from './folders.controller';
import { FoldersService } from './folders.service';


@Module({
   imports: [MongooseModule.forFeature([{ name: 'Folder', schema: FolderSchema }])],
   controllers: [FoldersController],
   providers: [FoldersService]
})
export class FoldersModule {}
