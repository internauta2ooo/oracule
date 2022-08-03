import { Connection } from 'mongoose';
import { CarSchema } from '../domain/car';


export const carProvider = [
  {
    provide: 'CarModelToken',
    useFactory: (connection: Connection) => connection.model('car', CarSchema, 'car'),
    inject: ['DbConnectionToken'],
  },
];
