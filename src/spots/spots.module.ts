import { Module } from '@nestjs/common';
import { SpotsService } from './services/spots.service';
import { SpotsController } from './controller/spots.controller';
import { EventsModule } from 'src/events/events.module';

@Module({
  imports: [EventsModule],
  controllers: [SpotsController],
  providers: [SpotsService],
})
export class SpotsModule {}
