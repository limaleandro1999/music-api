import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Music } from './music.entity';

@Injectable()
export class MusicsService {
  constructor(
    @InjectRepository(Music)
    private musicRepository: Repository<Music>,
  ) {}

  async create(music: Music): Promise<Music> {
    const createdMusicId = await (await this.musicRepository.insert(music)).raw; // Created music id

    return this.musicRepository.findOne(createdMusicId);
  }

  findAll(): Promise<Music[]> {
    return this.musicRepository.find();
  }

  findOne(id: number): Promise<Music> {
    return this.musicRepository.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.musicRepository.delete(id);
  }
}
