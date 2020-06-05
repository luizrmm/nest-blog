import { AbstractEntity } from './abstract.entity';
import { IsEmail } from 'class-validator';
import * as bcrypt from 'bcryptjs';
import { Exclude } from 'class-transformer';
import { Entity, Column, BeforeInsert } from 'typeorm';

@Entity('users')
export class UserEntity extends AbstractEntity {
  @Column({
    unique: true,
  })
  @IsEmail()
  email: string;

  @Column()
  username: string;

  @Column({
    default: '',
  })
  bio: string;

  @Column({
    default: '',
    nullable: true,
  })
  image: string | null;

  @Column()
  @Exclude()
  password: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}
