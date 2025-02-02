import { Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('data')
  async getHello() {
    try {
      return await this.appService.getHello();
    } catch (error) {
    }
  }

  @Post('data/:id')
  async postHello(@Param('id') id: string) {
    try {
      return await this.appService.postHello(id);
    } catch (error) {
    }
  }
  
}
