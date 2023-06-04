import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from './customer/customer.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarmodelModule } from './carmodel/carmodel.module';
import { RentcarModule } from './rentcar/rentcar.module';
import { OptionsModule } from './options/options.module';
import { ReserveModule } from './reserve/reserve.module';
import { PreviousrentalModule } from './previousrental 02-23-26-933/previousrental.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '159357',
      database: 'term',
      synchronize: true,
      logging: true,
      entities: ['dist/**/*.entity{.ts,.js}'],
    }),
    CustomerModule,
    CarmodelModule,
    RentcarModule,
    OptionsModule,
    ReserveModule,
    PreviousrentalModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
