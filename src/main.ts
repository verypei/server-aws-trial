import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from 'fs';
import helmet from 'helmet';

async function bootstrap() {
  const httpsOptions = {
    key: fs.readFileSync('/etc/letsencrypt/live/api.segendigitalindonesia.id/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/api.segendigitalindonesia.id/fullchain.pem'),
  };
  const app = await NestFactory.create(AppModule, { httpsOptions });
  // const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('aws');
  app.use(helmet());
  await app.listen(433, '0.0.0.0', () => {
    console.log("---------- server running  on port 433- TRIAL HTTPS --------");
  });
}
bootstrap();
