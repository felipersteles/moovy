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

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '../.env',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      synchronize: true, // não recomendado em ambientes de produção
      entities: [UserEntity, MovieEntity, MovieReviewEntity],
      migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
      migrationsTableName: 'migration_table',
      autoLoadEntities: true,
    }),
    AuthModule,
    MovieReviewModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
