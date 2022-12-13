import { BadRequestException } from "@nestjs/common";
import { MovieMapper } from "src/movies/movies.mapper";
import { MovieReviewDto } from "./dto/movie_review.dto";
import { MovieReviewEntity } from "./entities/movie_review.entity";

export class MovieReviewMapper { 
    static fromDTOtoEntity(entityDTO: MovieReviewDto): MovieReviewEntity { 
        if (!entityDTO) {
            throw new BadRequestException('Invalid input DTO');
          }
      
          const entity = new MovieReviewEntity();
      
          const fields = Object.getOwnPropertyNames(entityDTO);
      
          fields.forEach((field) => {
            entity[field] = entityDTO[field];
          });
      
          return entity;
    }

    static fromEntityToDTO(entity: MovieReviewEntity): MovieReviewDto { 
        if (!entity) {
          throw new BadRequestException('Invalid input entity');
        }
    
        const entityDTO = new MovieReviewDto();
        
        entityDTO.audioReview = entity.audio
        entityDTO.rating = entity.rating
        entityDTO.movie = MovieMapper.fromEntityToShowDTO(entity.movie)

        return entityDTO;
    }
}