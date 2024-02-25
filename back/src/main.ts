import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {configSwagger} from "./Swager/swagger.config";
import {Logger} from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = '3000';
  const globalPrefix = 'api';

  configSwagger(app, port, globalPrefix);
  app.enableCors();

  await app.listen(port, () => {
    Logger.log(`Listening at http://localhost:${port}/${globalPrefix}`);
  });
}
bootstrap();
