import * as mongoose from 'mongoose';

export const databaseProvider = [
  {
    provide: 'DbConnectionToken',
    inject: [],
    useFactory: async (): Promise<typeof mongoose> =>
    mongoose.connect('mongodb://localhost:27017/oracule')
  },
];
