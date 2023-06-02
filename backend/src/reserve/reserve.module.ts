import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reserve } from './reserve.entity';
import { ReserveController } from './reserve.controller';
import { ReserveService } from './reserve.service';

@Module({
  imports: [TypeOrmModule.forFeature([Reserve])],
  controllers: [ReserveController],
  providers: [ReserveService],
})
export class ReserveModule {}
