// Interfaces que representam os dados do usuário, já que o TypeORM não suporta o Cassandra.

export interface UserEntity {
  id: string;
  name: string;
  email: string;
  password: string;
}
