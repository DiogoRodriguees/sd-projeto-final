import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export class DatabaseConfig {
  public static REGISTER: TypeOrmModuleOptions = {
    type: 'sqlite',
    database: 'database.sqlite',
    // entities: [UserEntity, RolesEntity, UserRolesEntity],
    autoLoadEntities: true,
    synchronize: true, // Automatiza o sincronismo do schema, use com cuidado
  };
}
