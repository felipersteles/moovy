import { Movie } from 'src/movies/entities/movie.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'user_movies' })
export class UserMovie {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, (user) => user.user_movie)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: User;

  // é possivel cadastrar so o id
  // tentar em algum momento!
  @ManyToOne(() => Movie, (movie) => movie.movie_user)
  @JoinColumn({ name: 'movie_id', referencedColumnName: 'id' })
  movie: Movie;

  @Column({ name: 'audio_review', default: null })
  audio_review: string;
}
