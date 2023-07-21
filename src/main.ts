import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import * as path from 'path';


async function bootstrap() {

  dotenv.config({ path: path.resolve(__dirname, '../', '.env') }); 
  console.log(process.env)
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  const port = process.env.PORT || 3000;

  await app.listen(port);
}
bootstrap();
