import { Controller, Get, Res } from '@nestjs/common';
import type { Response } from 'express';
import { CategoryService } from '../services/category.service';

@Controller()
export class AppController {
  constructor(private readonly categoryService: CategoryService) {}
  @Get()
  async home(@Res() res: Response) {
    const categories = await this.categoryService.findAll();
    return res.render('index', { categories });
  }
}
