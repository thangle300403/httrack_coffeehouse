import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ProductService } from 'src/services/product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('category/:id')
  async getByCategory(@Param('id', ParseIntPipe) id: number) {
    return this.productService.findByCategoryId(id);
  }
}
