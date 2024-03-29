import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProductModule } from './products/products.module';

@Module({
  imports: [UserModule,PrismaModule,ProductModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
