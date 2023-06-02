import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarModel } from './carmodel.entity';
import { CarModelService } from './carmodel.service';
import { CarModelController } from './carmodel.controller';

@Module({
  //   imports: [TypeOrmModule.forFeature([CarModel])],
  //   providers: [CarModelService],
  //   controllers: [CarModelController],
})
export class CarmodelModule {}
