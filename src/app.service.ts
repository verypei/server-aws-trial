import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async getHello() {
    try {
      return '<h1>----------Hello World FROM DOCKER -------- !</h1>';
    } catch (error) {
      throw error;
    }
  }

  async postHello(id: string) {
    try {
      return `<h1>this is my id : ${id}</h1>`;
    } catch (error) {
      throw error;
    }
  }

  async patchHello(id: string) {
    try {
      return `<h1>this is my id patch : ${id}</h1>`;
    } catch (error) {
      throw error;
    }
  }
}
