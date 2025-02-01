import { Controller, Get } from '@nestjs/common';
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
}
