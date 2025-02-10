import { AUTH_REPOSITORY } from './constants';
import { Auth } from './entity/auth.entity';


export const usersProviders = [
  {
    provide: AUTH_REPOSITORY,
    useValue: Auth,
  }
];
