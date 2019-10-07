import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Photo } from './photo.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Photo])]
})
export class PhotoModule {}
