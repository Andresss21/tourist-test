import { ApiProperty } from '@nestjs/swagger';

export class LikeResponseDto {
    @ApiProperty()
    id: string;

    @ApiProperty()
    destinationId: string;

    @ApiProperty()
    ipAddress: string;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;
}