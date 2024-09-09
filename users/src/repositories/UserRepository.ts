import { Injectable, NotFoundException } from '@nestjs/common';
import { UserEntity } from 'src/@core/entities/UserEntity';
import { CassandraService } from 'src/services/cassandra.service';
import { UserDTO } from 'src/shared/dtos/UserDTO';

@Injectable()
export class UserRepository {
  constructor(private cassandraService: CassandraService) {}
  
  // Método responsável por criar um usuário
  async register(name: string, email: string, password: string) {
    try {
      await this.cassandraService.saveUser(name, email, password);
      return this.validateUserCreation(name, email);

    } catch (err) {
      throw new Error(`[User Repository] Something went wrong while creating user: ${err.message}`);
    }
  }

  // Método responsável por validar a criação de um usuário
  async validateUserCreation(name: string, email: string) {
    const user = await this.findByEmail(email);
    if (user.name == name && user.email == email) {
      console.log('[User Repository] User created successfully!');
      return true;
    } else {
      console.log('[User Repository] Something went wrong while creating user.');
      return false;
    }
  }

  // Método responsável por procurar um usuário através do seu email
  async findByEmail(email: string) {
    const user = await this.cassandraService.findOne(email);
    if (user == null) throw new NotFoundException('[User Repository] User not found.');
    return user;
  }

  // TODO
  // async list() {
  //   return await this.repos.find();
  // }
}
