import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from './customer/customer.module';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'oracle',
      host: '127.0.0.1',
      port: 55885,
      sid: 'XE',
      username: 'term',
      password: '1111',
      database: 'term',
      synchronize: true,
      logging: true,
      entities: ['dist/**/*.entity{.ts,.js}'],
    }),
    CustomerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
