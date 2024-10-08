import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { PublicationEntity } from 'src/@core/entities/PublicationEntity';
import { RolesEntity } from 'src/@core/entities/RolesEntity';
import { UserEntity } from 'src/@core/entities/UserEntity';
import { UserRolesEntity } from 'src/@core/entities/UserRolesEntity';

export class DatabaseConfig {
  public static REGISTER: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'database',
    port: 5432,
    username: 'admin',
    password: 'admin',
    database: 'postgres',
    entities: [UserEntity, RolesEntity, UserRolesEntity, PublicationEntity],
    autoLoadEntities: true,
    synchronize: true,
  };
}
