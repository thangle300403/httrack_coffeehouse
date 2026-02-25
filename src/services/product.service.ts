import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private repo: Repository<Product>,
  ) {}

  // Tìm sản phẩm theo category id
  async findByCategoryId(categoryId: number) {
    return this.repo.find({
      where: { category: { id: categoryId } },
      relations: ['category'],
    });
  }
}
