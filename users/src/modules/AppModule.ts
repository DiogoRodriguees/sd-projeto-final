import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { CassandraService } from 'src/services/cassandra.service';
import { JwtConfig } from 'src/shared/config/JwtConfig';
import { Providers } from 'src/shared/providers/Providers';
import { AppController } from '../controllers/AppController';
import { AppService } from '../services/AppService';
import { UserModule } from './UserModule';

@Module({
  imports: [
    ConfigModule.forRoot(),
    JwtModule.register(JwtConfig.REGISTER),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService, JwtService, Providers.LOGGER_PROVIDER, CassandraService],
})
export class AppModule {}
