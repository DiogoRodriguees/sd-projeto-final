import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthenticationDTO } from 'src/shared/dtos/AuthenticationDTO';
import { UserDTO } from 'src/shared/dtos/UserDTO';

@Injectable()
export class UserService {
  private users: Array<UserDTO>;

  constructor(private readonly jwtService: JwtService) {
    this.users = new Array<UserDTO>();
  }

  async authenticate(user: UserDTO, credentials: UserDTO) {
    if (!user || user.password !== credentials.password)
      throw new UnauthorizedException('Credentials incorrect');

    const payload = { sub: user.name, email: user.email, name: user.email };
    const token = await this.jwtService.signAsync(payload);

    return new AuthenticationDTO(token);
  }

  async register(user: UserDTO) {
    this.users.push(user);
  }

  async list() {
    return this.users;
  }

  async findByEmail(email: string) {
    for (const user of this.users) {
      if (user.email === email) return user;
    }
    return null;
  }
}
