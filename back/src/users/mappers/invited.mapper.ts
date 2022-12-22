import { BadRequestException } from '@nestjs/common';
import { CreateInvitedDto } from '../dto/create-invited.dto';
import { InvitedEntity } from '../entities/invited.entity';

export class InvitedMapper {
  static fromDTOtoEntity(entityDTO: CreateInvitedDto): InvitedEntity {
    if (!entityDTO) {
      throw new BadRequestException('Invalid input DTO');
    }

    const entity = new InvitedEntity();

    const fields = Object.getOwnPropertyNames(entityDTO);

    fields.forEach((field) => {
      entity[field] = entityDTO[field];
    });

    return entity;
  }
}
