import { ArticleService } from '../services/article.service';
import { Article } from '../entities/article.entity';
export declare class ArticleController {
    private readonly appService;
    constructor(appService: ArticleService);
    getArtcile(): Promise<Article>;
}
