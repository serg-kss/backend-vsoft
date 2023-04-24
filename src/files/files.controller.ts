import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateFileDto } from './dto/create-file.dto';
import { FilesService } from './files.service';

@Controller('files')
export class FilesController {
   constructor(public fileService: FilesService){}

   @Post()
   create(@Body() createFileDto: CreateFileDto){
     return this.fileService.create(createFileDto);
   }

   @Get()
   getAll(){
     return this.fileService.findAll();
   }
}
