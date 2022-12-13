import { MovieReviewEntity } from 'src/movie_review/entities/movie_review.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'movies' })
export class MovieEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'titulo', nullable: false })
  titulo: string;

  @Column({ name: 'img', nullable: false })
  img: string;

  @OneToMany(() => MovieReviewEntity, (movieReview) => movieReview.movie)
  movieReviews: MovieReviewEntity[];
}
