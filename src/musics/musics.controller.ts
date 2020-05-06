import { Controller, Get, Post, Body, Param } from '@nestjs/common';

import { CreateMusicDTO } from './dto/create-music.dto';
import { MusicsService } from './musics.service';
import { Music } from './interfaces/music.interface';

@Controller('musics')
export class MusicsController {
  constructor(private musicService: MusicsService){}

  @Get()
  findAll(): Promise<Music[]> {
    return this.musicService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): Promise<Music> {
    return this.musicService.findOne(id);
  }

  @Post()
  create(@Body() music: CreateMusicDTO): Promise<Music> {
    return this.musicService.create(music);
  }
}
