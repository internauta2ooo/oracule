import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { databaseProvider } from './provider/database.provider';

@Module({
  providers: [...databaseProvider, ConfigService],
  exports: [...databaseProvider],
  imports: [],
})
export class PersistenceModule {
}
