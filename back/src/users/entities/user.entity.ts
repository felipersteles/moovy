import { MovieReviewEntity } from 'src/movie-review/entities/movie-review.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity {
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

  @OneToMany(() => MovieReviewEntity, (movieReview) => movieReview.user)
  movieReviews: MovieReviewEntity[];
}
