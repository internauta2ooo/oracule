import { Controller, Get } from '@nestjs/common';

@Controller('car')
export class CarController {
    @Get()
    findAll():string{
        return "something"
    }
}
