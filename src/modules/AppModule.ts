import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { JwtConfig } from 'src/shared/config/JwtConfig';
import { AppController } from '../controllers/AppController';
import { AppService } from '../services/AppService';
import { UserModule } from './UserModule';

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      global: true,
      secret: JwtConfig.SECRET,
      signOptions: { expiresIn: JwtConfig.EXPERED_TIME },
    }),
  ],
  controllers: [AppController],
  providers: [AppService, JwtService],
})
export class AppModule {}
