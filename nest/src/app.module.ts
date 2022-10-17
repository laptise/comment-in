import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommenteeModule } from './commentee/commentee.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
    }),
    CommenteeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
