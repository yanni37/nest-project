import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import config from '../../ormconfig'
import { Article } from '../entities/article.entity';

@Module({
  imports: [TypeOrmModule.forRoot(config), TypeOrmModule.forFeature([Article])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
