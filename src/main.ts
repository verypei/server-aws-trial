import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('aws');
  // await app.listen(3000, () => {
  //   console.log("----------server running  on port 3000----------");
  // });
  await app.listen(3000, '0.0.0.0');
}
bootstrap();
