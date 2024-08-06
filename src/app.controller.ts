import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Film } from './entities/film.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('films')
  async getAllFilms(): Promise<Film[]> {
    return this.appService.getAllFilms();
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
