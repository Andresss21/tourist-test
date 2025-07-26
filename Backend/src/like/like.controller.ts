import { Controller, Post, Param, Req } from '@nestjs/common';
import { LikeService } from './like.service';

@Controller('like')
export class LikeController {
    constructor(private readonly likeService: LikeService) {}

    // Endpoint de like/unlike de un destino
    @Post('toggleLike/:destinationId')
    toggleLike(
        @Param('destinationId') destinationId: string,
        @Req() request: any
    ) {
        const ip = request.headers['x-forwarded-for'] || request.ip;
        return this.likeService.toggleLike(destinationId, ip);
    }



    

}
