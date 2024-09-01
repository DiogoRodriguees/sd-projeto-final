import { Module } from '@nestjs/common';
import { UserController } from 'src/controllers/UserController';
import { UserService } from 'src/services/UserModule';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
