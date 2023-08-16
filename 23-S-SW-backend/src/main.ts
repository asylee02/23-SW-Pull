import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const PORT = configService.get<number>('SERVER_PORT'); //env에서 SERVER_PORT 가져오기.

  app.setGlobalPrefix('server'); // prefix는 Next에서 사용하는 api와 충돌을 피하기 위해 server로 설정.
  app.enableCors(); //cors 설정.
  app.use(helmet());
  await app.listen(PORT);
}
bootstrap();
