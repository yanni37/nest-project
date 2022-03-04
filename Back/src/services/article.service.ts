import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Article } from '../entities/article.entity';

@Injectable()
export class ArticleService {
    
  constructor(
    @InjectRepository(Article) private articleRpository: Repository<Article>
  ) {}

  getAll(): Promise<Article []> {
    return this.articleRpository.find(); // SELECT * FROM ARTICLE
  }

  getOneById(id: number): Promise<Article> {
    return this.articleRpository.findOne(id); // SELECT * FROM ARTICLE WHERE artcile.id = id;
  }

// Solution qui permet d'avoir un msg d'erreur quand le select renvoi rien au lieu d'aucun message
//  async getOneById(id: number): Promise<Article> {
//    try {
//      const article = await this.articleRpository.findOneOrFail(id); // SELECT * FROM ARTICLE WHERE artcile.id = id;
//    } catch (err) {
        // message erreur
//         throw err;
//    }
//  }

createArticle(title: string): Promise<Article> {
  const newArticle = this.articleRpository.create({title}); // const newArticle = new Article(); newArticle.title = title;
  // const newArticle = this.articleRpository.insert({title}); <-- On aurait pus utiliser insert mais il renvoit le resultat de l'insert et pas ce que l'on veut: l'entité elle meme
  
  return this.articleRpository.save(newArticle); // INSERT 
}

async updateArticle(id: number, title: string): Promise<Article> {
  const article = await this.getOneById(id);

  article.title= title;

  return this.articleRpository.save(article); // UPDATE
}


async deleteArticle(id: number): Promise<Article> {
  const article = await this.getOneById(id);

  return this.articleRpository.remove(article); // DELETE
 // return this.articleRpository.delete(article); <-- On aurait pus utiliser delete mais il renvoit le resultat de la suppression et pas ce que l'on veut: l'entité elle meme
}


  getHello(): string {
    return 'Hello World!';
  }
}

// En utilisant le repository on peut creer des customQuery
// customQuery(): any {
//   return this.articleRpository.createQueryBuilder("article").select("title").orderBy
// } ---------------> VOIR DOCUMENTATION