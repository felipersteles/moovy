import { forwardRef, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { UserEntity } from './entities/user.entity';
import { AuthModule } from 'src/auth/auth.module';
import { SuperUserController } from './superuser.controller';
import { InvitedEntity } from 'src/users/entities/invited.entity';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity, InvitedEntity]),
    forwardRef(() => AuthModule),
    MailerModule.forRoot({
      transport: {
        host: 'smtp.mailgun.org', //host smtp
        secure: false, //regras de segurança do serviço smtp
        port: 587, // porta
        auth: {
          //dados do usuário e senha
          user: 'postmaster@sandbox1d834e8ab01e4129bf0b6eaa9899c75a.mailgun.org',
          pass: 'fccd36d129e6d2ef86557fe701f5d0db-eb38c18d-3d800b6e',
        },
        ignoreTLS: true,
      },
      defaults: {
        // configurações que podem ser padrões
        from: '"',
      },
    }),
  ],
  controllers: [UsersController, SuperUserController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
