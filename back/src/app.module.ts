import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { MovieReviewModule } from './movie-review/movie-review.module';
import { UserEntity } from './users/entities/user.entity';
import { MovieEntity } from './movies/entities/movie.entity';
import { MovieReviewEntity } from './movie-review/entities/movie-review.entity';
import { InvitedEntity } from './users/entities/invited.entity';
import { MoviesModule } from './movies/movies.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      synchronize: true, // não recomendado em ambientes de produção
      entities: [UserEntity, MovieEntity, MovieReviewEntity, InvitedEntity],
      autoLoadEntities: true,
    }),
    AuthModule,
    MovieReviewModule,
    MoviesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
