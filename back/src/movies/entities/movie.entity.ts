import { MovieReview } from 'src/movie_review/entities/movie_review.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'movies' })
export class Movie {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'titulo', nullable: false })
  titulo: string;

  @Column({ name: 'img', nullable: false })
  img: string;

  @OneToMany(() => MovieReview, (movieReview) => movieReview.movie)
  movieReviews: MovieReview[];
}
