import { Controller, Get } from '@nestjs/common';
import { AppService } from '../services/app.service';
import { Article } from '../entities/article.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    
    return this.appService.getHello();
  }
}
