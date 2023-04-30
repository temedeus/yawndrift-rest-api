import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {PrismaService} from "./prisma/prisma_service";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT || 3000);
  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app)
}

bootstrap();
