import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MoviesModule } from './movies/movies.module';
import { AuthModule } from './auth/auth.module';
import { MovieReviewModule } from './movie_review/movie_review.module';

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
      entities: [__dirname + '/**/*.entity{.js,.ts}'],
      migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
      migrationsTableName: 'migration_table',
    }),
    AuthModule,
    MovieReviewModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
