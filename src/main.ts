import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { zipkinMiddleware } from './zipkin-tracing';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(zipkinMiddleware);
  await app.listen(3000);
}
bootstrap();
