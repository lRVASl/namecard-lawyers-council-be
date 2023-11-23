import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { PrismaService } from '@namecard-lawyers/share';
import config from './configs';
import * as cors from 'cors';
import { NamecardMainModule } from './app.module';
const PORT = config().port;

async function bootstrap() {
  const app = await NestFactory.create(NamecardMainModule);

  const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
  };
  app.use(cors(corsOptions));
  const prismaService = app.get(PrismaService);
  prismaService.enableShutdownHooks(app as any);

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(PORT);
  console.log(`service start on port : ${PORT}`);
}
bootstrap();
