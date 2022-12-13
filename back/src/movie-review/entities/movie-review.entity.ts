/* eslint-disable prettier/prettier */

import { MovieEntity } from 'src/movies/entities/movie.entity';
import { UserEntity } from 'src/users/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
  JoinColumn,
} from 'typeorm';

@Entity({ name: 'movie_review' })
export class MovieReviewEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'rating', nullable: false, type: 'numeric' })
  rating: number;

  @Column({ name: 'audio_review', nullable: true })
  audio: string;

  @ManyToOne(() => UserEntity)
  @JoinColumn([{name: 'user_id', referencedColumnName: 'id'}])
  user: UserEntity;

  @ManyToOne(() => MovieEntity)
  @JoinColumn([{name: 'movie_id', referencedColumnName: 'id'}])
  movie: MovieEntity;
}
