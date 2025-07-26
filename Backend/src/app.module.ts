import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DestinationModule } from './destination/destination.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [DestinationModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
