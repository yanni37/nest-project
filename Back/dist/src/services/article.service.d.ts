import { Repository } from 'typeorm';
import { Article } from '../entities/article.entity';
export declare class ArticleService {
    private articleRpository;
    constructor(articleRpository: Repository<Article>);
    getAll(): Promise<Article[]>;
    getOneById(id: number): Promise<Article>;
    createArticle(title: string): Promise<Article>;
    updateArticle(id: number, title: string): Promise<Article>;
    deleteArticle(id: number): Promise<Article>;
    getHello(): string;
}
