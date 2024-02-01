import { NestFactory } from '@nestjs/core';
// import { AppModule } from './routes/app/app.module';
import { RoutersModule } from './routes/router';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(RoutersModule);

  const config = new DocumentBuilder()
    .setTitle('Template NestJS API')
    .setDescription('@litriladuanhanvien')
    .setVersion('1.0')
    .addTag('cats')
    .build();

  app.useGlobalPipes(new ValidationPipe());
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
  

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
