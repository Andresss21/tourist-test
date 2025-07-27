// src/destination/dto/destination-response.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class DestinationResponseDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  imageUrl: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}


export class PaginatedDestinationsResponseDto {
  @ApiProperty({ type: [DestinationResponseDto] })
  destinations: DestinationResponseDto[];

  @ApiProperty()
  hasMore: boolean;

  @ApiProperty({ nullable: true })
  nextCursor: string | null;
}
