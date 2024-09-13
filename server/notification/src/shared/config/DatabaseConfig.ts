import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export class DatabaseConfig {
  public static REGISTER: TypeOrmModuleOptions = {
    type: 'postgres',
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    username: 'admin',
    password: 'admin',
    database: 'postgres',
    entities: [],
    autoLoadEntities: true,
    synchronize: true,
  };
}
