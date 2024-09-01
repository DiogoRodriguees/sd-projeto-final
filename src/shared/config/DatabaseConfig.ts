import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { UserEntity } from 'src/@core/entities/UserEntity';

export class DatabaseConfig {
  public static REGISTER: TypeOrmModuleOptions = {
    type: 'sqlite',
    database: 'database.sqlite',
    entities: [UserEntity], // Registre suas entidades
    synchronize: true, // Automatiza o sincronismo do schema, use com cuidado
  };
}
