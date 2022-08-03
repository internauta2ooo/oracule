import { Module } from '@nestjs/common';

import { CarController } from './modules/car/controller/car.controller';
import { Modules } from './modules/modules';

@Module({
  imports: [Modules],
  controllers: [],
  providers: [],
})
export class AppModule {}
