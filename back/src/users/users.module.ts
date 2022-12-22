import { forwardRef, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { UserEntity } from './entities/user.entity';
import { AuthModule } from 'src/auth/auth.module';
import { SuperUserController } from './superuser.controller';
import { InvitedEntity } from 'src/users/entities/invited.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity, InvitedEntity]),
    forwardRef(() => AuthModule),
  ],
  controllers: [UsersController, SuperUserController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
