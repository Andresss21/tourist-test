import {
    Controller,
    Post,
    Get,
    Patch,
    Delete,
    Body,
    Param,
    Query
} from '@nestjs/common';
import {
    ApiTags,
    ApiOperation,
    ApiResponse,
    ApiQuery,
    ApiParam,
    ApiBody
} from '@nestjs/swagger';
import { DestinationService } from './destination.service';
import { CreateDestinationDto } from './dto/create-destination.dto';
import { UpdateDestinationDto } from './dto/update-destination.dto';
import { SearchDestinationDto } from './dto/search-destination.dto';
import { DestinationResponseDto, PaginatedDestinationsResponseDto } from './dto/destination-response.dto';

@Controller('destination')
@ApiTags('Destination')
export class DestinationController {
    constructor(private destinationService: DestinationService) {}

    // Endpoint de creacion de un destino
    @Post()
    @ApiOperation({ summary: 'Create a new destination' })
    @ApiBody({
        type: CreateDestinationDto,
        examples: {
            default: {
                summary: 'Example destination',
                value: {
                    name: 'Lago de Coatepeque',
                    description: 'Un hermoso lago en El Salvador',
                    address: 'Lago de Coatepeque, El Salvador',
                    imageUrl: 'https://example.com/lago-de-coatepeque.jpg',
                },
            },
        },
    })
    @ApiResponse({ status: 201, description: 'Destination created successfully.', type: DestinationResponseDto })
    @ApiResponse({ status: 400, description: 'Invalid data format.' })
    @ApiResponse({ status: 500, description: 'Internal server error.' })
    create(@Body() createDto: CreateDestinationDto) {
        return this.destinationService.create(createDto);
    }


    // Endpoint para obtener todos los destinos
    @Get()
    @ApiOperation({ summary: 'Get all destinations with pagination' })
    @ApiQuery({ name: 'cursor', required: false, description: 'Cursor for pagination' })
    @ApiQuery({ name: 'records', required: false, description: 'Number of records to fetch', type: Number })
    @ApiResponse({ status: 200, description: 'List of destinations.', type: PaginatedDestinationsResponseDto })
    @ApiResponse({ status: 500, description: 'Internal server error.' })
    findAll(@Query() query: SearchDestinationDto) {
    const { cursor, records = 10 } = query;
    return this.destinationService.findAll(cursor, records);
    }


    // Endpoint para obtener un destino por ID
    @ApiOperation({ summary: 'Get a destination by ID' })
    @ApiParam({ name: 'id', required: true, description: 'ID of the destination' })
    @ApiResponse({ status: 200, description: 'Destination found.', type: DestinationResponseDto })
    @ApiResponse({ status: 404, description: 'Destination not found.' })
    @ApiResponse({ status: 500, description: 'Internal server error.' })
    @Get('findOne/:id')
    findOne(@Param('id') id: string) {
        return this.destinationService.findOne(id);
    }

    // Endpoint para actualizar un destino
    @ApiOperation({ summary: 'Update a destination by ID' })
    @ApiParam({ name: 'id', required: true, description: 'ID of the destination' })
    @ApiResponse({ status: 200, description: 'Destination updated successfully.', type: DestinationResponseDto })
    @ApiResponse({ status: 404, description: 'Destination not found.' })
    @ApiResponse({ status: 400, description: 'Invalid data format.' })
    @ApiResponse({ status: 500, description: 'Internal server error.' })
    @Patch('update/:id')
    update(@Param('id') id: string, @Body() updateDto: UpdateDestinationDto) {
        return this.destinationService.update(id, updateDto);
    }

    // Endpoint para eliminar un destino
    @ApiOperation({ summary: 'Delete a destination by ID' })
    @ApiParam({ name: 'id', required: true, description: 'ID of the destination' })
    @ApiResponse({ status: 200, description: 'Destination deleted successfully.', type: DestinationResponseDto })
    @ApiResponse({ status: 404, description: 'Destination not found.' })
    @ApiResponse({ status: 500, description: 'Internal server error.' })
    @Delete('remove/:id')
    remove(@Param('id') id: string) {
        return this.destinationService.remove(id);
    }

}


