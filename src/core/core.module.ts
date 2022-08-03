import { Module } from '@nestjs/common';
import { PersistenceModule } from './persistence/persistence.module';


@Module({
  imports: [
    PersistenceModule,
  ],
  providers: [],
  exports: [
    PersistenceModule,
  ],
})
export class CoreModule {
}
