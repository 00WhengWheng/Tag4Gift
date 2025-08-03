import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Get('games')
  getGames() {
    return this.appService.getGames();
  }

  @Get('games/:id')
  getGameById(@Param('id') id: string) {
    return this.appService.getGameById(id);
  }

  @Post('games')
  addGame(@Body() game: { id: string; title: string; description: string; category: string }) {
    this.appService.addGame(game);
    return { message: 'Game added successfully' };
  }
}
