import { UserEntity } from 'src/users/entities/user.entity';

export class CreateMovieDto {
  titulo: string;
  img: string;
  user: UserEntity;
  hate: number;
}
