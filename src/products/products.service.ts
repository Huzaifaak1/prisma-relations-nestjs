import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AddProductsDto } from './dtos/add-products.dto';

@Injectable({})
export class ProductService {
  constructor(private prismaService: PrismaService) {}

  async addProducts(addProductsDto: AddProductsDto, userId: number) {
    const data = await this.prismaService.products.create({
      data: {
        name: addProductsDto.name,
        desc: addProductsDto.desc,
        price: addProductsDto.price,
        userId: userId,
      },
    });
    return {
      data,
      message: 'Product added successfully.',
      status: true,
    };
  }

  async getUserProducts(){
    const userProducts = await this.prismaService.products.findMany({
        where:{
            userId : 12
        },
        include:{
            User : true
        }

    });
    return userProducts;
  }
}
