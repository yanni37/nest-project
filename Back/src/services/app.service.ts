import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { userInfo } from 'os';
import { Repository } from 'typeorm';
import { Article } from '../entities/article.entity';

@Injectable()
export class AppService {

  getHello(): string {
    return 'Hello The World!';
  }
}

// En utilisant le repository on peut creer des customQuery
// customQuery(): any {
//   return this.articleRpository.createQueryBuilder("article").select("title").orderBy
// } ---------------> VOIR DOCUMENTATION