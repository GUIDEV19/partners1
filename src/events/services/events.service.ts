import { Injectable } from '@nestjs/common';
import { CreateEventDto } from '../dto/create-event.dto';
import { UpdateEventDto } from '../dto/update-event.dto';
import { ReserveSpotDto } from '../dto/reserve-spot.dto';
import { PrismaService } from 'src/prisma/service/prisma.service';

@Injectable()
export class EventsService {
  constructor(private prismaService: PrismaService) {}

  create(createEventDto: CreateEventDto) {
    return this.prismaService.event.create({
      data: {
        ...createEventDto,
        date: new Date(createEventDto.date),
        updatedAt: new Date()
      }
    });
  }

  findAll() {
    return this.prismaService.event.findMany();
  }

  findOne(id: string) {
    return this.prismaService.event.findUnique({
      where: {
        id
      }
    });
  }

  update(id: string, updateEventDto: UpdateEventDto) {
    return this.prismaService.event.update({
      data: {
        ...updateEventDto,
        date: new Date(updateEventDto.date)
      },
      where: {id}
    });
  }

  remove(id: string) {
    return this.prismaService.event.delete({where: {id}});
  }

  reserveSpot(reserveSpotDto: ReserveSpotDto & {eventId: string}) {
    const spots = this.prismaService.spot.findMany({
      where: {
        eventId: reserveSpotDto.eventId,
        name: {
          in: reserveSpotDto.spots
        }
      }
    });
  }
}
