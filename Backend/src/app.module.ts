import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DestinationModule } from './destination/destination.module';
import { PrismaModule } from './prisma/prisma.module';
import { LikeModule } from './like/like.module';

@Module({
  imports: [DestinationModule, PrismaModule, LikeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
