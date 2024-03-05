import { Body, Controller, Get, Post } from "@nestjs/common";
import { AddProductsDto } from "./dtos/add-products.dto";
import { ProductService } from "./products.service";

@Controller('products')
export class ProductController{
    constructor(private productService : ProductService){}

    @Post('add')
    addProducts(@Body() addProductsDto : AddProductsDto){
        // console.log(addProductsDto)
        return this.productService.addProducts(addProductsDto,12);
    }

    @Get('')
    getUserProducts(){
        return this.productService.getUserProducts()
    }
    
}