import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/@core/entities/UserEntity';
import { UserDTO } from 'src/shared/dtos/UserDTO';
import { Repository } from 'typeorm';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly repos: Repository<UserEntity>,
  ) {}

  async findByEmail(email: string) {
    const user = await this.repos.findOne({
      where: { email },
    });

    if (!user) throw new NotFoundException('Email not found');
    return user;
  }

  async register(userDTO: UserDTO) {
    const user = new UserEntity(userDTO);
    await this.repos.save(user);
  }

  async list() {
    return await this.repos.find();
  }
}
