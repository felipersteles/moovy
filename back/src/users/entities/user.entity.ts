import { UserMovie } from 'src/user_movie/entities/user_movie.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'email', nullable: false })
  email: string;

  @Column({ name: 'password', nullable: false })
  password: string;

  @OneToMany(() => UserMovie, (user_movie) => user_movie.user)
  user_movie: UserMovie[];

  @Column({ default: false })
  superuser: boolean;
}
