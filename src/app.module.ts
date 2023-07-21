import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './modules/tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';

import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';



@Module({
  imports: [ConfigModule.forRoot(),TypeOrmModule.forRoot(typeOrmConfig),TasksModule,UsersModule,AuthModule],
  // controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
