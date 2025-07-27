import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDestinationDto } from './dto/create-destination.dto';
import { UpdateDestinationDto } from './dto/update-destination.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class DestinationService {

    constructor(private prisma: PrismaService) {}

    // Funcion de creacion de un destino
    async create(createDto: CreateDestinationDto) {
    try {
        return await this.prisma.destination.create({ data: createDto });
    } catch (error) {
        // Error: datos invalidos para crear el destino
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
        throw new BadRequestException('Invalid data format for creating destination');
        }
        throw new InternalServerErrorException('Unexpected error creating destination');
    }
    }


    // Funcion para obtener todos los destinos
    async findAll(cursor?: string, records = 10) {
        try {

            // Fetch de registros, trae un registro mas para determinar si hay mas elementos
            const response = await this.prisma.destination.findMany({
                take: records + 1, 
                ...(cursor && {
                    skip: 1,
                    cursor: { id: cursor },
                }),
                orderBy: {
                    createdAt: 'desc',
                },
            });

            // Manejo de elementos de infinity scroll
            const hasMore = response.length > records;
            const destinations = hasMore ? response.slice(0, records) : response;
            const nextCursor = hasMore ? destinations[destinations.length - 1].id : null;

            return {
                destinations,
                hasMore,
                nextCursor,
            };
        } catch (error) {
           throw new InternalServerErrorException('Error fetching destinations');
        }
    }

    // Funcion para obtener un destino por ID
    async findOne(id: string) {
    try {
        const destination = await this.prisma.destination.findUnique({
        where: { id },
        });

        // Error: el destino no fue encontrado
        if (!destination) {
        throw new NotFoundException(`Destination with id '${id}' not found`);
        }

        return destination;
    } catch (error) {
        throw new InternalServerErrorException('Unexpected error retrieving destination');
    }
    }


    // Funcion para actualizar un destino
    async update(id: string, updateDto: UpdateDestinationDto) {
    try {
        return await this.prisma.destination.update({
        where: { id },
        data: updateDto,
        });
    } catch (error) {
        // Error: el destino no existe
        if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
        throw new NotFoundException(`Destination with id '${id}' not found for update`);
        }
        throw new InternalServerErrorException('Unexpected error updating destination');
    }
    }


    // Funcion para eliminar un destino
    async remove(id: string) {
    try {
        return await this.prisma.destination.delete({
        where: { id },
        });
    } catch (error) {
        // Error: el destino no existe
        if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
        throw new NotFoundException(`Destination with id '${id}' not found for deletion`);
        }
        throw new InternalServerErrorException('Unexpected error deleting destination');
    }
    }



}
