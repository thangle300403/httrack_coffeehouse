import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from './modules/category.module';
import { ProductModule } from './modules/product.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'cfh',
      autoLoadEntities: true,
      synchronize: false,
    }),
    CategoryModule,
    ProductModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
