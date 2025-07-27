import { Module } from '@nestjs/common';
import { DestinationController } from './destination.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { DestinationService } from './destination.service';

@Module({
  imports: [PrismaModule],
  controllers: [DestinationController],
  providers: [DestinationService]
  
})
export class DestinationModule {}
