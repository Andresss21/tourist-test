import { IsOptional, IsUUID, IsInt, Max } from 'class-validator';
import { Type } from 'class-transformer';

export class SearchDestinationDto {
  @IsOptional()
  @IsUUID()
  cursor?: string;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Max(100)
  records?: number;
}
