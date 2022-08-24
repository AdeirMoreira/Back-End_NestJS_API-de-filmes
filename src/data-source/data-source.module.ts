import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movies } from 'src/movies/entities/movie.entity';
import { config } from "dotenv";
import { User } from 'src/user/entities/user.entity';

config()

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: process.env.POSTGRES_DB as any,
      host: process.env.POSTGRES_HOST,
      port: +process.env.POSTGRES_PORT,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [Movies, User],
      synchronize: true,
      retryAttempts: 10,
      retryDelay: 100,
      autoLoadEntities: true,
    }),
  ],
})
export class DataSourceModule {}
