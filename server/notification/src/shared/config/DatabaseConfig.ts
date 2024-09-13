import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export class DatabaseConfig {
  public static REGISTER: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'database',
    port: 5432,
    username: 'admin',
    password: 'admin',
    database: 'postgres',
    entities: [],
    autoLoadEntities: true,
    synchronize: true,
  };
}
