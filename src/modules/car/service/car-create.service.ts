import {Inject, Injectable} from '@nestjs/common';
import {Model} from 'mongoose';
import { Car, CarDocument } from '../domain/car';

@Injectable()
export class CarCreate  {

  constructor(
    @Inject('CarModelToken')
    private readonly model: Model<CarDocument>,
  ) {
  }

  async execute(car: Car): Promise<any> {
   
    const created = new this.model(car);
    return created.save();
  }
}
