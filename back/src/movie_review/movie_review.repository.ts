/* eslint-disable prettier/prettier */
import { DataSource, EntityRepository, Repository } from 'typeorm';
import { MovieReview } from './entities/movie_review.entity';

@EntityRepository(MovieReview)
export class MovieReviewRepository extends Repository<MovieReview> {
  constructor(private dataSource: DataSource) {
    super(MovieReview, dataSource.createEntityManager());
  }
}
