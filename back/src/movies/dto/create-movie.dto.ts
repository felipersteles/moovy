import { User } from 'src/users/entities/user.entity';

export class CreateMovieDto {
  titulo: string;
  img: string;
  user: User;
  hate: number;
}
