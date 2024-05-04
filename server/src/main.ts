import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new ExpressAdapter(express()));
  app.use('/uploads', express.static('upload'));
  app.enableCors({
    origin: 'http://localhost:3000', 
    credentials: true, 
  });
  await app.listen(3001);
}

bootstrap();
