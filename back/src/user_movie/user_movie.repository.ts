/* eslint-disable prettier/prettier */
import { DataSource, EntityRepository, Repository } from 'typeorm';
import { UserMovie } from './entities/user_movie.entity';

@EntityRepository()
export class UserMovieRepository extends Repository<UserMovie> {
  constructor(private dataSource: DataSource) {
    super(UserMovie, dataSource.createEntityManager());
  }

  findByUser(userID: string) {
    console.log(userID);
    return this.createQueryBuilder('usermovie')
      .where('usermovie.user = :userID', { userID })
      .getMany();
  }
}
