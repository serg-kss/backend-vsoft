import { Body, Controller, Get, Post, Delete, Param, Patch } from '@nestjs/common';
import { FoldersService } from './folders.service';
import { CreateFolderDto } from './dto/create-folder.dto';
import { UpdateFolderDto } from './dto/update-folder.dto';


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

   @Patch('/patch/:id')
   update(@Param('id') id: string, @Body() updateFolderDto: UpdateFolderDto) {
    return this.folderService.update(id, updateFolderDto);
  }

   @Delete('/delete/:id')
   remove(@Param('id') id:string){
     return this.folderService.remove(id);
   }
}
