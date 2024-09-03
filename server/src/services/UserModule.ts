import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from 'src/@core/entities/UserEntity';
import { UserRepository } from 'src/repositories/UserRepository';
import { AuthenticationDTO } from 'src/shared/dtos/AuthenticationDTO';
import { UserDTO } from 'src/shared/dtos/UserDTO';

@Injectable()
export class UserService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userRepository: UserRepository,
  ) {}

  async authenticate(user: UserEntity, credentials: UserDTO) {
    if (!user || user.password !== credentials.password)
      throw new UnauthorizedException('Credentials incorrect');

    const payload = { id: user.id, name: user.email, email: user.email };
    const token = await this.jwtService.signAsync(payload);

    return new AuthenticationDTO(token);
  }

  async register(user: UserDTO) {
    this.userRepository.register(user);
  }

  async list() {
    return await this.userRepository.list();
  }

  async findByEmail(email: string) {
    return await this.userRepository.findByEmail(email);
  }
}
