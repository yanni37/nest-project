import { Controller, Get } from '@nestjs/common';
import { ArticleService } from '../services/article.service';
import { Article } from '../entities/article.entity';

@Controller()
export class ArticleController {
  constructor(private readonly appService: ArticleService) {}

  @Get()
  async getArtcile(): Promise<Article> {
    // CREATE
    return this.appService.createArticle("premier article");

    // UPDATE
    // const article = await this.appService.createArticle("premier article");
    // await this.appService.createArticle("premier article"); <- classiquement utilisé mais on a crée une const pour pouvoir recuperer l'id sans passer par un INT en dur
    //                                   ¡¡¡¡¡¡¡¡¡¡
    //                                   vvvvvvvvvv
    // return this.appService.updateArticle(article.id, "update premier article");

    // DELETE 
    // return this.appService.deleteArticle(8);
  }

}
