import { Controller, Get } from '@nestjs/common';
import { Car } from '../domain/car';
import { CarCreate } from '../service/car-create.service';

@Controller('car')
export class CarController {
    constructor(
        private carCreate:CarCreate
    ){}

    @Get()
    findAll():any{
        const car:Car={color:"red",model:"c200"}
        return this.carCreate.execute(car)
        
    }
}
