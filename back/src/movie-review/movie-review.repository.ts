/* eslint-disable prettier/prettier */
import { DataSource, EntityRepository, Repository } from 'typeorm';
import { MovieReviewEntity } from './entities/movie_review.entity';

@EntityRepository(MovieReviewEntity)
export class MovieReviewRepository extends Repository<MovieReviewEntity> {
  constructor(private dataSource: DataSource) {
    super(MovieReviewEntity, dataSource.createEntityManager());
  }
}
