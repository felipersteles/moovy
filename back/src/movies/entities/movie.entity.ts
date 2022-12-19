import { MovieReviewEntity } from 'src/movie-review/entities/movie-review.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'movies' })
export class MovieEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'title', nullable: false })
  title: string;

  @Column({ name: 'img', nullable: false })
  img: string;

  @Column({ name: 'idmb_id', nullable: true })
  imdbID: string;

  @OneToMany(() => MovieReviewEntity, (movieReview) => movieReview.movie)
  movieReviews: MovieReviewEntity[];
}
