/* eslint-disable prettier/prettier */


import { BadRequestException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserShowDto } from './dto/user-show.dto';
import { User } from './entities/user.entity';

export class UserMapper {
  static fromDTOtoEntity(entityDTO: CreateUserDto): User {
    if (!entityDTO) {
      throw new BadRequestException('Invalid input DTO');
    }

    const entity = new User();

    const fields = Object.getOwnPropertyNames(entityDTO);

    fields.forEach((field) => {
      entity[field] = entityDTO[field];
    });

    return entity;
  }

  static fromEntityToDTO(entity: User): UserShowDto {
    if (!entity) {
      throw new BadRequestException('Invalid input entity');
    }

    const entityDTO = new UserShowDto();

      entityDTO.id = entity.id;
      entityDTO.username = entity.username
    //   entityDTO.movieReviews = entity.movieReviews

    // criar mapper movie review e examinar(basear-se) codigo de baixo
      
    // entity.personProfile &&
    //   (entityDTO.personProfile = PersonProfileMapper.fromEntityToShortDTO(
    //     entity.personProfile,
    //   ));

    return entityDTO;
  }
}
