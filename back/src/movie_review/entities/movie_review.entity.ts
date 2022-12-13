/* eslint-disable prettier/prettier */

import { Movie } from 'src/movies/entities/movie.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
  JoinColumn,
} from 'typeorm';

@Entity({ name: 'movie_review' })
export class MovieReview {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'rating', nullable: false, type: 'numeric' })
  rating: number;

  @Column({ name: 'audio_review', nullable: true })
  audio: string;

  @ManyToOne(() => User)
  @JoinColumn([{name: 'userId', referencedColumnName: 'id'}])
  user: User;

  @ManyToOne(() => Movie)
  @JoinColumn([{name: 'movieId', referencedColumnName: 'id'}])
  movie: Movie;
}
