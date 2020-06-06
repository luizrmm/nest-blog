import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { UpdateUserDTO } from 'src/models/user.model';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async findByUsername(username: string): Promise<UserEntity> {
    return this.userRepository.findOne({
      where: { username },
    });
  }

  async updateUser(username: string, data: UpdateUserDTO): Promise<UserEntity> {
    await this.userRepository.update({ username }, data);
    return this.findByUsername(username);
  }
}
