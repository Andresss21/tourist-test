import { IsNotEmpty, IsString, IsUrl } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDestinationDto {
  @ApiProperty({
    description: 'Name of the destination',
    example: 'Lago de Coatepeque',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Description of the destination',
    example: 'Un hermoso lago en El Salvador',
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    description: 'Address of the destination',
    example: 'Lago de Coatepeque, El Salvador',
  })
  @IsString()
  @IsNotEmpty()
  address: string;

  @ApiProperty({
    description: 'Image URL of the destination',
    example: 'https://example.com/lago-de-coatepeque.jpg',
  })
  @IsUrl()
  @IsNotEmpty()
  imageUrl: string;
}
