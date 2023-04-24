import { Body, Controller, Get, Post } from '@nestjs/common';
import { FoldersService } from './folders.service';
import { CreateFolderDto } from './dto/create-folder.dto';

@Controller('folders')
export class FoldersController {
   constructor(public folderService: FoldersService){}

   @Post()
   create(@Body() createFolderDto: CreateFolderDto){
     return this.folderService.create(createFolderDto);
   }

   @Get()
   getAll(){
     return this.folderService.findAll();
   }
}
