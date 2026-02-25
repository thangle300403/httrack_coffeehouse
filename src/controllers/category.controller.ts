import { Controller, Get, Res } from '@nestjs/common';
import type { Response } from 'express';
import { CategoryService } from 'src/services/category.service';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async home(@Res() res: Response) {
    const categories = await this.categoryService.findAll();
    return res.render('index', { categories });
  }
}
