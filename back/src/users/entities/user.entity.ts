import { MovieReview } from 'src/movie_review/entities/movie_review.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'username', nullable: false })
  username: string;

  @Column({ name: 'email', nullable: false })
  email: string;

  @Column({ name: 'password', nullable: false })
  password: string;

  @Column({ default: false })
  superuser: boolean;

  @OneToMany(() => MovieReview, (movieReview) => movieReview.user)
  movieReviews: MovieReview[];
}
