import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LikeService {
  constructor(private readonly prisma: PrismaService) {}

    // Funcion de like/unlike de un destino
    async toggleLike(destinationId: string, ipAddress: string) {

        // Revisar si la dirección IP ya ha dado like al destino
        const existing = await this.prisma.like.findUnique({
            where: {
            ipAddress_destinationId: {
                ipAddress,
                destinationId,
            },
            },
        });

        // Si existe, eliminar el like; si no, crear uno nuevo
        if (existing) {
            // Eliminar el like existente
            await this.prisma.like.delete({
            where: { id: existing.id },
            });
            return {
            liked: false,
            totalLikes: await this.getLikeCount(destinationId),
            };
        }

        // Crear un nuevo like
        await this.prisma.like.create({
            data: { ipAddress, destinationId },
        });

        return {
            liked: true,
            totalLikes: await this.getLikeCount(destinationId),
        };
    }

    // Funcion para obtener el conteo de likes
    private async getLikeCount(destinationId: string): Promise<number> {
    return this.prisma.like.count({
        where: { destinationId },
    });
    }

}
