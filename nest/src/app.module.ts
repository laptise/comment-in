import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Commentee } from './commentee/commentee';
import { CommenteeModule } from './commentee/commentee.module';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { User } from './user/user';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'ci_db',
      username: process.env.DB_USER_NAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      synchronize: true,
      entities: [Commentee, User],
      namingStrategy: new SnakeNamingStrategy(),
    }),
    CommenteeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
