import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { JwtConfig } from 'src/shared/config/JwtConfig';
import { Providers } from 'src/shared/providers/Providers';
import { AppController } from '../controllers/AppController';
import { AppService } from '../services/AppService';
import { PublicationModule } from './PublicationModule';
import { CassandraService } from 'src/cassandra/cassandra.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    JwtModule.register(JwtConfig.REGISTER),
    PublicationModule,
  ],
  controllers: [AppController],
  providers: [AppService, JwtService, Providers.LOGGER_PROVIDER, CassandraService],
})
export class AppModule {}