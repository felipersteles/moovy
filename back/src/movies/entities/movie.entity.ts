import { UserMovie } from 'src/user_movie/entities/user_movie.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'movies' })
export class Movie {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'titulo', nullable: false })
  titulo: string;

  @Column({ name: 'img', nullable: false })
  img: string;

  @Column({ name: 'hate', nullable: false, type: 'numeric' })
  hate: number;

  // corrigir para many to many
  @OneToMany(() => UserMovie, (user_movie) => user_movie.movie)
  movie_user: UserMovie[];
}
