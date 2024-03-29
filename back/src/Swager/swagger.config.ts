import { INestApplication, Logger } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import {
  SWAGGER_DESCRIPTION,
  SWAGGER_PATH,
  SWAGGER_TITLE,
  SWAGGER_VERSION,
} from './constants';

export const configSwagger = (
  app: INestApplication,
  port: number | string,
  globalPrefix: string,
): void => {
  const options = new DocumentBuilder()
    .setTitle(SWAGGER_TITLE)
    .setDescription(SWAGGER_DESCRIPTION)
    .setVersion(SWAGGER_VERSION)
    .addBearerAuth({ in: 'header', type: 'http' })
    .build();

  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup(`${globalPrefix}${SWAGGER_PATH}`, app, document);

  Logger.log(`Swagger available at http://localhost:${port}/${globalPrefix}${SWAGGER_PATH}`);
};
