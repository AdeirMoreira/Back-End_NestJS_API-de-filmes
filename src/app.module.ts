import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { DataSourceModule } from './data-source/data-source.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    MoviesModule,
    DataSourceModule,
    UserModule,
  ],
  providers: [],
  controllers: []
})
export class AppModule {}
