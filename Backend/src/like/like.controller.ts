import { Controller, Post, Param, Req } from '@nestjs/common';
import { LikeService } from './like.service';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
} from '@nestjs/swagger';
import { LikeResponseDto } from './dto/like-response.dto';


@Controller('like')
@ApiTags('Like')
export class LikeController {
    constructor(private readonly likeService: LikeService) {}

    // Endpoint de like/unlike de un destino
    @ApiOperation({ summary: 'Like or unlike a destination' })
    @ApiParam({ name: 'destinationId', required: true, description: 'ID of the destination to like/unlike' })
    @ApiResponse({ status: 200, description: 'Like toggled successfully.', type: LikeResponseDto })
    @ApiResponse({ status: 404, description: 'Destination not found.' })
    @ApiResponse({ status: 500, description: 'Internal server error.' })
    @Post('toggleLike/:destinationId')
    toggleLike(
        @Param('destinationId') destinationId: string,
        @Req() request: any
    ) {
        const ip = request.headers['x-forwarded-for'] || request.ip;
        return this.likeService.toggleLike(destinationId, ip);
    }



    

}
