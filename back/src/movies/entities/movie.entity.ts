import { MovieReviewEntity } from 'src/movie-review/entities/movie-review.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'movies' })
export class MovieEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'titulo', nullable: false })
  titulo: string;

  @Column({ name: 'img', nullable: false })
  img: string;

  @Column({ name: 'idmb_id', nullable: false })
  idmbID: string;

  @OneToMany(() => MovieReviewEntity, (movieReview) => movieReview.movie)
  movieReviews: MovieReviewEntity[];
}
