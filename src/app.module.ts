import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminController } from './subdomain.controller';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/Stream')],
  controllers: [AppController, CatsController, AdminController],
  providers: [AppService],
})
export class AppModule {}
