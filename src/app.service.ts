import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async getHello() {
    try {
      console.log("tes hello world----------s");
      return '<h1>Hello World FROM DOCKER !</h1>';
    } catch (error) {
      throw error;
    }
  }
}
