import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from 'src/@core/entities/UserEntity';
import { AuthenticationDTO } from 'src/shared/dtos/AuthenticationDTO';
import { UserDTO } from 'src/shared/dtos/UserDTO';
import { CassandraService } from 'src/cassandra/cassandra.service';

@Injectable()
export class AuthorizationService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly cassandraService: CassandraService,
  ) {}

  // Método para autenticar um usuário
  async authenticate(user: any, credentials: UserDTO) {
    if (!user || user.password !== credentials.password) throw new UnauthorizedException('[Auth Service] User credentials incorrect.');

    const payload = { id: user.id, name: user.name, email: user.email };
    const token = await this.jwtService.signAsync(payload);

    return new AuthenticationDTO(token);
  }

  // Método para buscar um usuário pelo email
  async findByEmail(email: string) {
    const user = await this.cassandraService.findOne(email);
    if (user == null) throw new NotFoundException('[Auth Service] User not found.');
    return user;
  }
}
