import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('aws');
  await app.listen(3000, '0.0.0.0', () => {
    console.log("----------server running  on port 3000----------");
  });
}
bootstrap();
