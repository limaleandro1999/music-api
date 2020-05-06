import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Music } from "src/musics/music.entity";

export const options: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: './db.sqlite',
  logging: true,
  entities: [Music],
  synchronize: true,
};