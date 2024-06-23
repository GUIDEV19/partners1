import { Module } from '@nestjs/common';
import { EventsService } from './services/events.service';
import { EventsController } from './controller/events.controller';

@Module({
  controllers: [EventsController],
  providers: [EventsService],
  exports: [EventsService]
})
export class EventsModule {}
