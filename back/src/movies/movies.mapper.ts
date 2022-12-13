import { BadRequestException } from "@nestjs/common";
import { ShowMovieDto } from "./dto/show-movie.dto";
import { MovieEntity } from "./entities/movie.entity";

export class MovieMapper { 
    // static fromDTOtoEntity(entityDTO: Movie): MovieReviewEntity { 
    //     if (!entityDTO) {
    //         throw new BadRequestException('Invalid input DTO');
    //       }
      
    //       const entity = new MovieReviewEntity();
      
    //       const fields = Object.getOwnPropertyNames(entityDTO);
      
    //       fields.forEach((field) => {
    //         entity[field] = entityDTO[field];
    //       });
      
    //       return entity;
    // }

    static fromEntityToShowDTO(entity: MovieEntity): ShowMovieDto { 
        if (!entity) {
          throw new BadRequestException('Invalid input entity');
        }
    
        const entityDTO = new ShowMovieDto();
        
        entityDTO.img = entity.img
        entityDTO.titulo = entity.titulo

        return entityDTO;
    }
}