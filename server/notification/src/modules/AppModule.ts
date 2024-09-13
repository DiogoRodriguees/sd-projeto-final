import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmailConsumer } from 'src/consumers/EmailConsumer';
import { EmailService } from 'src/services/EmailService';
import { DatabaseConfig } from 'src/shared/config/DatabaseConfig';
import { JwtConfig } from 'src/shared/config/JwtConfig';
import { Providers } from 'src/shared/providers/Providers';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '../.env',
    }),
    TypeOrmModule.forRoot(DatabaseConfig.REGISTER),
    TypeOrmModule.forFeature([]),
    JwtModule.register(JwtConfig.REGISTER),
  ],
  controllers: [EmailConsumer],
  providers: [JwtService, EmailService, Providers.LOGGER_PROVIDER],
})
export class AppModule {}
