import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDestinationDto } from './dto/create-destination.dto';
import { UpdateDestinationDto } from './dto/update-destination.dto';

@Injectable()
export class DestinationService {

    constructor(private prisma: PrismaService) {}

    // Funcion de creacion de un destino
    async create(createDto: CreateDestinationDto) {
        try {
            return await this.prisma.destination.create({
                data: createDto,
            });
        } catch (error) {
           throw new InternalServerErrorException('Error creating destination');
        }
    }

    // Funcion para obtener todos los destinos
    async findAll() {
        try {
            return await this.prisma.destination.findMany({
                orderBy: {
                    createdAt: 'desc',
                },
            });
        } catch (error) {
           throw new InternalServerErrorException('Error fetching destinations');
        }
    }

    // Funcion para obtener un destino por ID
    async findOne(id: string) {
        try {
            return await this.prisma.destination.findUnique({
                where: { id },
            });
        } catch (error) {
           throw new InternalServerErrorException('Error fetching destination');
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
           throw new InternalServerErrorException('Error updating destination');
        }
    }

    // Funcion para eliminar un destino
    async remove(id: string) {
        try {
            return await this.prisma.destination.delete({
                where: { id },
            });
        } catch (error) {
           throw new InternalServerErrorException('Error deleting destination');
        }
    }


}
