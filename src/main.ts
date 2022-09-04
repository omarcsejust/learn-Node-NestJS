import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// Swagger UI
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Swagger UI
  const config = new DocumentBuilder()
    .setTitle('Task Api')
    .setDescription('The Task-Management API description')
    .setVersion('1.0')
    .addTag('Task')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
}
bootstrap();
