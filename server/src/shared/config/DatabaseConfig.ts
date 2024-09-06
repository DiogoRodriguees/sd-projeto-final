import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { PublicationEntity } from 'src/@core/entities/PublicationEntity';
import { RolesEntity } from 'src/@core/entities/RolesEntity';
import { UserEntity } from 'src/@core/entities/UserEntity';
import { UserRolesEntity } from 'src/@core/entities/UserRolesEntity';

export class DatabaseConfig {
  public static REGISTER: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5433,
    username: 'admin',
    password: 'admin',
    database: 'distributed-system',
    entities: [UserEntity, RolesEntity, UserRolesEntity, PublicationEntity],
    autoLoadEntities: true,
    synchronize: true,
  };
}
