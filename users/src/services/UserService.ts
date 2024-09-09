import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
// import { UserEntity } from 'src/@core/entities/UserEntity';
import { UserRepository } from 'src/repositories/UserRepository';
// import { AuthenticationDTO } from 'src/shared/dtos/AuthenticationDTO';
import { UserDTO } from 'src/shared/dtos/UserDTO';

// @Injectable()
// export class UserService {
//   constructor(
//     private readonly jwtService: JwtService,
//     private readonly userRepository: UserRepository,
//   ) {}

//   async authenticate(user: UserEntity, credentials: UserDTO) {
//     if (!user || user.password !== credentials.password)
//       throw new UnauthorizedException('Credentials incorrect');

//     const payload = { id: user.id, name: user.email, email: user.email };
//     const token = await this.jwtService.signAsync(payload);

//     return new AuthenticationDTO(token);
//   }

//   async list() {
//     return await this.userRepository.list();
//   }

//   async findByEmail(email: string) {
//     return await this.userRepository.findByEmail(email);
//   }
// }


import { CassandraService } from 'src/services/cassandra.service';

@Injectable()
export class UserService {

  constructor(
    private cassandraService: CassandraService,
    private readonly jwtService: JwtService,
    private readonly userRepository: UserRepository
  ) {}

  // Método responsável por registrar um novo usuário no sistema
  async register(user: UserDTO) {
    return this.userRepository.register(user.name, user.email, user.password);
  }

  // async getAllUsers() {
  //   const query = 'SELECT * FROM users';
  //   try {
  //     const result = await this.cassandraService.getClient().execute(query);
  //     return result.rows;
  //   } catch (err) {
  //     throw new Error(`Erro ao buscar usuários: ${err.message}`);
  //   }
  // }
}
