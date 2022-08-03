import { Module } from '@nestjs/common';
import { CoreModule } from 'src/core/core.module';
import { CarController } from './controller/car.controller';
import { carProvider } from './provider/car.provider';
import { CarCreate } from './service/car-create.service';

@Module({
  imports: [CoreModule],
  controllers: [CarController],
  providers: [
    CarCreate,
    ...carProvider,
  ],
  exports: [],
})
export class CarModule {
}
