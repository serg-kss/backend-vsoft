import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { FoldersModule } from './folders/folders.module';
import { ConfigModule } from '@nestjs/config';
import { FilesModule } from './files/files.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
    MongooseModule.forRoot(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    UsersModule, 
    FoldersModule, FilesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
