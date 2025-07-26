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
import { DestinationService } from './destination.service';
import { CreateDestinationDto } from './dto/create-destination.dto';
import { UpdateDestinationDto } from './dto/update-destination.dto';
import { SearchDestinationDto } from './dto/search-destination.dto';

@Controller('destination')
export class DestinationController {
    constructor(private destinationService: DestinationService) {}

    // Endpoint de creacion de un destino
    @Post()
    create(@Body() createDto: CreateDestinationDto) {
    return this.destinationService.create(createDto);
    }

    // Endpoint para obtener todos los destinos
    @Get('findAll')
    findAll(@Query() query: SearchDestinationDto) {
    const { cursor, records = 10 } = query;
    return this.destinationService.findAll(cursor, records);
    }


    // Endpoint para obtener un destino por ID
    @Get('findOne/:id')
    findOne(@Param('id') id: string) {
        return this.destinationService.findOne(id);
    }

    // Endpoint para actualizar un destino
    @Patch('update/:id')
    update(@Param('id') id: string, @Body() updateDto: UpdateDestinationDto) {
        return this.destinationService.update(id, updateDto);
    }

    // Endpoint para eliminar un destino
    @Delete('remove/:id')
    remove(@Param('id') id: string) {
        return this.destinationService.remove(id);
    }

}


