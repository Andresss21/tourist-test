import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,               // strips out unknown fields
      forbidNonWhitelisted: true,    // throws 400 if unknown fields exist
      transform: true,
    }),
  );

  await app.listen(3000);
}
bootstrap();
