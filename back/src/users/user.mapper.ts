import { BadRequestException } from '@nestjs/common';
import { MovieReviewMapper } from 'src/movie-review/movie-review.mapper';
import { CreateUserDto } from './dto/create-user.dto';
import { ShowUserDto } from './dto/show-user.dto';
import { UserEntity } from './entities/user.entity';

export class UserMapper {
  static fromDTOtoEntity(entityDTO: CreateUserDto): UserEntity {
    if (!entityDTO) {
      throw new BadRequestException('Invalid input DTO');
    }

    const entity = new UserEntity();

    const fields = Object.getOwnPropertyNames(entityDTO);

    fields.forEach((field) => {
      entity[field] = entityDTO[field];
    });

    return entity;
  }

  static fromEntityToShowDTO(entity: UserEntity): ShowUserDto {
    if (!entity) {
      throw new BadRequestException('Invalid input entity');
    }

    const entityDTO = new ShowUserDto();

    entityDTO.id = entity.id;
    entityDTO.username = entity.username;
    //   entityDTO.movieReviews = entity.movieReviews

    // criar mapper movie review e examinar(basear-se) codigo de baixo
    // console.log(entity.movieReviews)
    
    entityDTO.movieReviews = []
    entity.movieReviews.forEach((movieRevier) => {
      entityDTO.movieReviews.push(MovieReviewMapper.fromEntityToDTO(movieRevier))
    })

    return entityDTO;
  }
}
