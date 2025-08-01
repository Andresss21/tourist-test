import { Module } from '@nestjs/common';
import { LikeController } from './like.controller';
import { LikeService } from './like.service';
import {PrismaModule} from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [LikeController],
  providers: [LikeService]
})
export class LikeModule {}
