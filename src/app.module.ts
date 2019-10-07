import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { type } from 'os';
import { PhotoModule } from './photo/photo.module';
import { Connection } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(), PhotoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { 
  /**
   *
   */
  constructor(private readonly connection: Connection) {
  }
}
