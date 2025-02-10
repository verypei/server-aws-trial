import { Inject, Injectable } from '@nestjs/common';
import { Auth } from './entity/auth.entity';
import { AUTH_REPOSITORY } from './constants';

@Injectable()
export class AppService {
  constructor(@Inject(AUTH_REPOSITORY) private authRepository: typeof Auth) { }
  async getHello() {
    try {
      return await this.authRepository.findAll();
    } catch (error) {
      throw error;
    }
  }

  async postHello(payload: any) {
    try {
      const data = await this.authRepository.create(payload);
      return data
    } catch (error) {
      throw error;
    }
  }

  async patchHello(id: string) {
    try {
      console.log("patch------");

      return `<h1>this is my id patch : ${id}</h1>`;
    } catch (error) {
      throw error;
    }
  }

  async deleteHello(id: string) {
    try {
      console.log("delete from id : ", id);

      return `<h1>this is my id to delete : ${id}</h1>`;
    } catch (error) {
      throw error;
    }
  }

}
