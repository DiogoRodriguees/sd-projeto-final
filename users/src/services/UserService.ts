import { Injectable, NotFoundException } from '@nestjs/common';
import { UserDTO } from 'src/shared/dtos/UserDTO';
import { CassandraService } from 'src/cassandra/cassandra.service';


@Injectable()
export class UserService {

  constructor(private cassandraService: CassandraService) {}

  // Método responsável por registrar um novo usuário no sistema
  async register(user: UserDTO) {
    try {
      await this.cassandraService.saveUser(user.name, user.email, user.password);
      return this.validateUserCreation(user.name, user.email);

    } catch (err) {
      throw new Error(`[User Service] Something went wrong while creating user: ${err.message}`);
    }
  }

  // Método responsável por validar a criação de um usuário
  async validateUserCreation(name: string, email: string) {
    const user = await this.findByEmail(email);
    if (user.name == name && user.email == email) {
      console.log('[User Service] User created successfully!');
      return true;
    } else {
      console.log('[User Service] Something went wrong while creating user.');
      return false;
    }
  }

  // Método responsável por buscar um usuário através do seu email
  async findByEmail(email: string) {
    const user = await this.cassandraService.findOne(email);
    if (user == null) throw new NotFoundException('[User Repository] User not found.');
    return user;
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
