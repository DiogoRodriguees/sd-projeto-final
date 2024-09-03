import { JwtService } from '@nestjs/jwt';
import { UserEntity } from 'src/@core/entities/UserEntity';
import { UserRepository } from 'src/repositories/UserRepository';
import { AuthenticationDTO } from 'src/shared/dtos/AuthenticationDTO';
import { UserDTO } from 'src/shared/dtos/UserDTO';
export declare class UserService {
    private readonly jwtService;
    private readonly userRepository;
    constructor(jwtService: JwtService, userRepository: UserRepository);
    authenticate(user: UserEntity, credentials: UserDTO): Promise<AuthenticationDTO>;
    register(user: UserDTO): Promise<void>;
    list(): Promise<UserEntity[]>;
    findByEmail(email: string): Promise<UserEntity>;
}
