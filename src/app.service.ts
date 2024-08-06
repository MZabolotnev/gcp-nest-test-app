import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Film } from './entities/film.entity';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class AppService implements OnModuleInit {
  constructor(
    @InjectRepository(Film)
    private filmsRepository: Repository<Film>,
  ) {}

  async onModuleInit(): Promise<void> {
    const filmsData = fs.readFileSync(
      path.join(__dirname, '../data/films.json'),
      'utf-8',
    );
    const films: Film[] = JSON.parse(filmsData);
    await this.filmsRepository.save(films);
  }

  async getAllFilms(): Promise<Film[]> {
    return this.filmsRepository.find();
  }

  getHello(): string {
    return 'Hello World!';
  }
}