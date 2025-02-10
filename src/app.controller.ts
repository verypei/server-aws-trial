import { Body, Controller, Delete, Get, Head, Inject, Param, Patch, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { AUTH_REPOSITORY } from './constants';
import { Auth } from './entity/auth.entity';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService) { }

  @Get('data')
  async getHello() {
    try {
      return await this.appService.getHello();
    } catch (error) {
      throw error
    }
  }

  @Post('data')
  async postHello(@Param('id') id: string, @Body() body :any) {
    try {
      return await this.appService.postHello(body);
    } catch (error) {
      throw error
    }
  }

  @Patch('data/:id')
  async patchHello(@Param('id') id: string) {
    try {
      return await this.appService.patchHello(id);
    } catch (error) {
      throw error
    }
  }

  @Delete('data/:id')
  async deleteHello(@Param('id') id: string) {
    try {
      return await this.appService.deleteHello(id);
    } catch (error) {
      throw error
    }
  }

}
