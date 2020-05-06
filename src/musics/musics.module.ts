import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MusicsController } from './musics.controller';
import { MusicsService } from './musics.service';
import { Music } from './music.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Music])],
  exports: [TypeOrmModule],
  controllers: [MusicsController],
  providers: [MusicsService],
})

export class MusicsModule {}
