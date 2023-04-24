import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { FoldersService } from './folders/folders.service';
import { FoldersController } from './folders/folders.controller';
import { FoldersModule } from './folders/folders.module';
import { ConfigModule } from '@nestjs/config';

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
    FoldersModule
  ],
  controllers: [AppController, FoldersController],
  providers: [AppService, FoldersService],
})
export class AppModule {}
