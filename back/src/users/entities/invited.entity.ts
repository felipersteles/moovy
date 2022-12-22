import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'inviteds' })
export class InvitedEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'email', nullable: false })
  email: string;
}