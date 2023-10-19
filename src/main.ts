import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function start() {
  const app = await NestFactory.create(AppModule);

  const config = app.get(ConfigService);

  app.setGlobalPrefix("api");

  const PORT = config.get<number>("PORT") || 3000;

  await app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
}

start();
