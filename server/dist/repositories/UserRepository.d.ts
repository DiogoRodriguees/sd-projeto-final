import { UserEntity } from 'src/@core/entities/UserEntity';
import { UserDTO } from 'src/shared/dtos/UserDTO';
import { Repository } from 'typeorm';
export declare class UserRepository {
    private readonly repos;
    constructor(repos: Repository<UserEntity>);
    findByEmail(email: string): Promise<UserEntity>;
    register(userDTO: UserDTO): Promise<void>;
    list(): Promise<UserEntity[]>;
}
